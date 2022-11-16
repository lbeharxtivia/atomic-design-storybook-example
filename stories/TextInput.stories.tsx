// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from '@components/common/TextInput';
import { TextInputProps } from 'types/TextInputProps.interface';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Primary: ComponentStory<typeof TextInput> = ({label,id, variant}:TextInputProps) => <div style={{maxWidth:"20rem"}}><TextInput {...{id:'sample-text-input', label, variant}} /></div>;
Primary.args = {
    label: "Input Label",
    variant: "default"
}
Primary.argTypes = {
  variant: {
    options: ['default','floating']
  }
}
