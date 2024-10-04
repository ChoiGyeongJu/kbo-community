import type { Meta, StoryObj } from '@storybook/react';

import InputForm from './InputForm';

const meta: Meta<typeof InputForm> = {
  component: InputForm,
  title: 'components/InputForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {},
};
