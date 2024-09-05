import { Meta, StoryObj } from '@storybook/react';

import PostListItem from './PostListItem';

export default {
  title: 'molecule/PostItem',
  component: PostListItem,
  tags: ['autodocs'],
} as Meta<typeof PostListItem>;

export const PostItem: StoryObj = {
  args: {
    rowId: 227,
    postInfo: {
      postId: 1,
      title: '테스트 제목 입니다.',
      author: {
        userId: 1,
        name: '홍길동',
      },
      regiDate: '2022-02-22',
      viewCounts: 1006,
      likeCounts: 32,
    },
  },
};
