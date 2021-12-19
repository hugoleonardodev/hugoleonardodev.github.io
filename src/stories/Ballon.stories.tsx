import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ballon from './Ballon';

export default {
  title: 'Example/Ballon',
  component: Ballon,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20vh' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Ballon>;

const Template: ComponentStory<typeof Ballon> = (args) => <Ballon {...args} />;

export const Example = Template.bind({});

Example.args = {
  position: 'bottom',
  text: `Hi! I'M a tooltip.`,
  children: 'hover or click me to show/hide tooltip',
  background: '#fff',
  color: '#000',
  styleMe: true
};

// Options.parameters = {
//     jest: ['Ballon.spec.tsx'],
// };
