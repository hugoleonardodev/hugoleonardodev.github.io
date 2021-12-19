import React from "react";
import styled from "styled-components";

const getChipSize = (size: 'small' | 'medium' | 'large') => {
    if (size === 'small') return '48px';
    if (size === 'medium') return '72px';
    return '128px';
}

type TImageAvatar = {
    size: 'small' | 'medium' | 'large';
    hasShadow?: boolean;
}

const ImageAvatar = styled.img<TImageAvatar>`
  border-radius: 100px;
  /* box-shadow: 0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%); */
  box-shadow: ${props => props.hasShadow && '0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%)'};
  max-height: ${props => getChipSize(props.size)};
  max-width: ${props => getChipSize(props.size)};
`;

type TChipProps = {
  avatar: string;
  size?: 'small' | 'medium' | 'large';
  hasShadow?: boolean;
};

const Chip: React.FC<TChipProps> = ({ avatar, size = 'medium', hasShadow = false }) => {
  return <ImageAvatar src={avatar} alt={avatar} size={size} hasShadow={hasShadow} />;
};

export default Chip;
