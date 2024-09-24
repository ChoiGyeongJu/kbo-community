import { Meta, StoryObj } from '@storybook/react';

import UIButton from './UIButton';

export default {
  title: 'Components/UIButton',
  component: UIButton,
  tags: ['autodocs'],
} as Meta<typeof UIButton>;

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
