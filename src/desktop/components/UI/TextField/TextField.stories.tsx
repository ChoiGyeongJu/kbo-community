import { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

export default {
  title: 'Components/Input',
  component: TextField,
  tags: ['autodocs'],
} as Meta<typeof TextField>;

export const Standard: StoryObj = {
  args: { outline: 'full' },
};

export const Bottom: StoryObj = {
  args: { outline: 'bottom' },
};

export const None: StoryObj = {
  args: { outline: 'none' },
};
