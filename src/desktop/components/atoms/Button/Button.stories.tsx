import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

export const Contained: StoryObj = {
  args: { variant: 'contained', color: 'primary', children: 'contained button' },
};

export const OutLined: StoryObj = {
  args: { variant: 'outlined', children: 'outlined button' },
};

export const Text: StoryObj = {
  args: { variant: 'text', children: 'text button' },
};

export const Disabled: StoryObj = {
  args: { disabled: true, children: 'diabled button' },
};
