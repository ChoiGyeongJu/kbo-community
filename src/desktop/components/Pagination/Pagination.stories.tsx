import Pagination from './Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'components/Pagination',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: { count: 10 },
};
