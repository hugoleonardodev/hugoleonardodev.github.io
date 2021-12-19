import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chip from './Chip';

export default {
  title: 'Example/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Options = Template.bind({});

Options.args = {
  avatar: 'https://github.com/hugoleonardodev.png',
  hasShadow: false,
  shape: 'rounded',
  size: 'large',
};

Options.parameters = {
    jest: ['Chip.spec.tsx'],
};
