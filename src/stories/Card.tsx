import React from "react";
import styled from "styled-components";
import Ballon from "./Ballon";

const CardContainer = styled.section`
  display: flex;
  border: 1px solid;
  max-height: 40vh;
  aside {
    margin-left: 16px;
  }
`;

const CardImage = styled.img`
  max-width: 50vw;
`;

export const CardBody = styled.div``;

export const CardTitle = styled.h3``;

export const CardSubtitle = styled.h4``;

export const CardText = styled.p``;

export const CardActionsContainer = styled.div``;

export const CardActionButton = styled.button``;

type TCardProps = {
  image: string;
};

const Card: React.FC<TCardProps> = ({ image, children }) => {
  return (
    <CardContainer className="card-image">
      <Ballon text={image}>
        <CardImage src={image} alt={image} />
      </Ballon>
      <aside>{children}</aside>
    </CardContainer>
  );
};

export default Card;
