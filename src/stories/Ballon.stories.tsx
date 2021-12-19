import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ballon from './Ballon';

export default {
  title: 'Example/Ballon',
  component: Ballon,
} as ComponentMeta<typeof Ballon>;

const Template: ComponentStory<typeof Ballon> = (args) => <Ballon {...args} />;

export const Example = Template.bind({});

export const ContainerCentered: React.FC = ({children}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10vh', marginBottom: '10vh' }}>
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
  position: 'bottom',
  text: `Hi! I'M a tooltip.`,
  children: 'hover or click me to show/hide tooltip',
  background: '#fff',
  color: '#000',
  outlined: true
};


// Options.parameters = {
//     jest: ['Ballon.spec.tsx'],
// };
