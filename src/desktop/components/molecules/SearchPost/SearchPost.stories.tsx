import { Meta, StoryObj } from '@storybook/react';

import SearchPost from './SearchPost';

export default {
  title: 'molecule/SearchPost',
  component: SearchPost,
  tags: ['autodocs'],
} as Meta<typeof SearchPost>;

export const PostSearch: StoryObj = {
  args: {},
};
