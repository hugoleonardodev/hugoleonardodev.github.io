import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Dropdown  from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Example = Template.bind({});

const ContainerCentered: React.FC = ({children}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20vh' }}>
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
  options: [
    { label: "one", value: 1 },
    { label: "two", value: 2 },
    { label: "three", value: 3 }
  ],
  label: "sample dropdown",
  isSelect: true,
  avatar: 'https://github.com/hugoleonardodev.png',
  hasShadow: true,
  shape: 'rounded'
};
