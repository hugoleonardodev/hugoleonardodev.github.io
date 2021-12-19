import React from "react";
import styled, { keyframes } from "styled-components";
import Chip from "./Chip";

import { getShape } from "./utils";

import {ReactComponent as CaretIcon} from './assets/caret.svg'

export const Main = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

type TDropdownHeaderProps = {
  hasShadow?: boolean;
  shape: 'flat' | 'borders' | 'rounded';
}

export const DropdownHeader = styled.div<TDropdownHeaderProps>`
  padding: 16px;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: ${props => getShape(props.shape)};
  box-shadow: ${props => props.hasShadow && '0 2px 3px rgba(0, 0, 0, 0.15)'};
`;

const appearFromTop = keyframes`
  from {
    height: 0;
  }
  to {
    height: 142.5px;
  }
`;

export const DropdownListContainer = styled.div`
  margin-top: 8px;
  animation: ${appearFromTop} 0.2s ease-in;
`;

export const DropdownList = styled.ul`
  padding: 16px 16px 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  z-index: 2;
  position: absolute;
  animation: ${appearFromTop} 0.2s ease-in;
`;

const appearFromLeft = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 47.5px;
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  animation: ${appearFromLeft} 0.2s ease-in;
`;

type TBackDropProps = {
  isOpen: boolean;
};

export const Backdrop = styled.div<TBackDropProps>`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
`;

type TOptionsProps = {
  label: string;
  value: number;
};

type TDropdownProps = {
  options: TOptionsProps[];
  label: string;
  isSelect?: boolean;
  avatar?: string;
  hasShadow?: boolean;
  shape?: 'flat' | 'borders' | 'rounded';
};

const Dropdown: React.FC<TDropdownProps> = ({ options, label, isSelect, avatar, shape = 'rounded', hasShadow = false}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(0);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: number) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropdownContainer>
        <DropdownHeader onClick={toggling} shape={shape} hasShadow={hasShadow}>
          {avatar && <Chip avatar="https://github.com/hugoleonardodev.png" size="small"/>}
          {isSelect ? (selectedOption || label) : label}
          <CaretIcon />
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {options.map((option) => (
                <ListItem
                  onClick={onOptionClicked(option.value)}
                  key={option.value}
                >
                  {option.label}
                </ListItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
      <Backdrop isOpen={isOpen} onClick={toggling} />
    </Main>
  );
};

export default Dropdown;
