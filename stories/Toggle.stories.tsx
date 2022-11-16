// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from '../components/common/Toggle';
import { ToggleProps } from 'types/common/ToggleProps.interface';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Primary: ComponentStory<typeof Toggle> = ({label}:ToggleProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert('Use Storybook control to toggle state');
  }
  return (<Toggle {...{label, onChange}} />)
}
Primary.args = {
    label: "Label",
    // checked: false,
}
