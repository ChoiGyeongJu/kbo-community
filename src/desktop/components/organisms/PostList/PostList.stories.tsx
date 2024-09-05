import { Meta, StoryObj } from '@storybook/react';

import PostList from './PostList';

export default {
  title: 'organism/PostList',
  component: PostList,
  tags: ['autodocs'],
} as Meta<typeof PostList>;

export const PostListTable: StoryObj = {
  args: {
    postList: [
      {
        postId: 3,
        title: '테스트 제목 입니다.',
        author: {
          userId: 1,
          name: '홍길동',
        },
        regiDate: '2022-02-22',
        viewCounts: 0,
        likeCounts: 32,
      },
      {
        postId: 2,
        title: '테스트 제목 입니다.',
        author: {
          userId: 1,
          name: '아무개',
        },
        regiDate: '2022-02-22',
        viewCounts: 211230,
        likeCounts: 211230,
      },
      {
        postId: 1,
        title: '테스트 제목 입니다.',
        author: {
          userId: 1,
          name: 'John',
        },
        regiDate: '2022-02-22',
        viewCounts: 51,
        likeCounts: 607,
      },
    ],
  },
};
