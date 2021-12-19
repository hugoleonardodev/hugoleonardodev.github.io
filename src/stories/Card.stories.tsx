import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card, { CardActionButton, CardActionsContainer, CardBody, CardSubtitle, CardText, CardTitle } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}><CardInfos /></Card>;

export const Example = Template.bind({});

const ContainerCentered: React.FC = ({children}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10vh' }}>
      {children}
    </div>
  )
}

Example.decorators = [
  (Story) =>
    <ContainerCentered>
      {Story()}
    </ContainerCentered>
];

Example.args = {
  image: 'https://github.com/hugoleonardodev.png',
};

export const CardInfos: React.FC = () => {
  return (
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
      <CardText>Lorem ipsum sorum Lorem ipsum sorum Lorem ipsum sorum Lorem ipsum sorum Lorem ipsum sorum Lorem ipsum sorum</CardText>
      <CardActionsContainer>
        <CardActionButton>Action</CardActionButton>
      </CardActionsContainer>
    </CardBody>
  )
};
