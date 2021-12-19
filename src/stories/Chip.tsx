import React from "react";
import styled from "styled-components";

const getChipSize = (size: 'small' | 'medium' | 'large') => {
    if (size === 'small') return '48px';
    if (size === 'medium') return '72px';
    return '128px';
}

const getChipShape = (shape: 'flat' | 'borders' | 'rounded') => {
    if (shape === 'flat') return '0';
    if (shape === 'borders') return '8px';
    return '100px';
}

type TImageAvatar = {
    hasShadow?: boolean;
    shape: 'flat' | 'borders' | 'rounded'
    size: 'small' | 'medium' | 'large';
}

const ImageAvatar = styled.img<TImageAvatar>`
  border-radius: ${props => getChipShape(props.shape)};
  box-shadow: ${props => props.hasShadow && '0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%)'};
  height: ${props => getChipSize(props.size)};
  width: ${props => getChipSize(props.size)};
`;

type TChipProps = {
  avatar: string;
  hasShadow?: boolean;
  shape?: 'flat' | 'borders' | 'rounded'
  size?: 'small' | 'medium' | 'large';
};

const Chip: React.FC<TChipProps> = ({ avatar, size = 'medium', hasShadow = false, shape = 'rounded' }) => {
  return <ImageAvatar src={avatar} alt={avatar} size={size} hasShadow={hasShadow} shape={shape} />;
};

export default Chip;
