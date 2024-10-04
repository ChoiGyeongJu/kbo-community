import type { Meta, StoryObj } from '@storybook/react';

import { generateComment } from '$shared/utils';
import Comment from './Comment';

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'components/Comment',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: { comment: generateComment() },
};
