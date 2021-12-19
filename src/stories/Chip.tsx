import React from "react";
import styled from "styled-components";

import { getShape, getSize } from "./utils";

type TImageAvatar = {
  hasShadow?: boolean;
  shape: 'flat' | 'borders' | 'rounded'
  size: 'small' | 'medium' | 'large';
}

const ImageAvatar = styled.img<TImageAvatar>`
  border-radius: ${props => getShape(props.shape)};
  box-shadow: ${props => props.hasShadow && '0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%)'};
  height: ${props => getSize(props.size)};
  width: ${props => getSize(props.size)};
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
