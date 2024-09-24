import { Meta, StoryObj } from '@storybook/react';

import SearchPost from './SearchPost';

export default {
  title: 'components/SearchPost',
  component: SearchPost,
  tags: ['autodocs'],
} as Meta<typeof SearchPost>;

export const PostSearch: StoryObj = {
  args: {},
};
