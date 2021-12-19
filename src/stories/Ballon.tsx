import React from 'react';
import styled, { css, keyframes } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
`;

type TTooltipTargetProps = {
  styleMe: boolean;
  showOnFocus?: boolean;
};

export const TooltipTarget = styled.div<TTooltipTargetProps>`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  ${({ styleMe }) =>
    styleMe &&
    css`
      padding: 15px;
      margin: 1px;
      border: 1px solid gray;
      border-radius: 5px;
      font-size: 2rem;
    `};

  color: inherit;
  cursor: inherit;
  display: flex;
  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

type TCenterContainerProps = {
    position: 'top' | 'right' | 'bottom' | 'left';
};

export const CenterContainer = styled.div<TCenterContainerProps>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "top":
        return css`
          top: unset !important;
          bottom: calc(100% + 5px);
        `;
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

interface ITooltipBoxProps {
  background: string;
  color: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export const TooltipBox = styled.span<ITooltipBoxProps>`
  position: relative;
  background-color: ${(props) => props.background};  
  color: ${(props) => props.color};
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  animation: ${fadeIn} 1s linear;

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.background} transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case "top":
        return css`
          &:after {
            border-color: #000 transparent transparent transparent;
            bottom: unset;
            width: 1px;
            top: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent #000 transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #000;
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent #000 transparent transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;

type TBallonProps = {
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
  background: string;
  styleMe?: boolean;
  text: string;
};

const Ballon: React.FC<TBallonProps> = ({ position = 'top', text, children, background, color = '#000', styleMe = true }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const targetRef = React.useRef(null);
  const showTooltip = isHovered || isFocused || isClicked;

  const handleClick = (e: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position} color={color}>
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Ballon;
