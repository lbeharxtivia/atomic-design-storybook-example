// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';


import { PrintTailwindConfig } from '@components/internal/PrintTailwindConfig';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tailwind Config',
  component: PrintTailwindConfig,
} as ComponentMeta<typeof PrintTailwindConfig>;

export const Primary: ComponentStory<typeof PrintTailwindConfig> = () => <PrintTailwindConfig />;
