import { faker } from '@faker-js/faker';

import { ResGetPost } from '$shared/service/post/getPost';
import { ResGetPostList } from '$shared/service/post/getPostList';
import { Post, Comment } from '$shared/types';

export const generatePostList = (count: number): ResGetPostList => {
  const posts: Post[] = [];

  for (let i = 1; i <= count; i++) {
    posts.push({
      postId: i,
      author: {
        userId: i,
        name: faker.name.firstName(),
      },
      title: faker.lorem.sentence(),
      viewCnt: faker.number.int({ min: 0, max: 99999 }),
      likeCnt: faker.number.int({ min: 0, max: 99999 }),
      regiDate: faker.date.past().toISOString().split('T')[0],
      modiDate: faker.date.past().toISOString().split('T')[0],
    });
  }

  return { totalCount: count, postList: posts };
};

export const generatePostDetail = (): ResGetPost => {
  return {
    post: {
      postId: 1,
      author: {
        userId: faker.number.int({ min: 0, max: 99999 }),
        name: faker.name.firstName(),
      },
      title: faker.lorem.sentence(),
      contents: faker.lorem.paragraphs(),
      viewCnt: faker.number.int({ min: 0, max: 99999 }),
      likeCnt: faker.number.int({ min: 0, max: 99999 }),
      regiDate: faker.date.past().toISOString().split('T')[0],
      modiDate: faker.date.past().toISOString().split('T')[0],
      comments: [generateComment()],
    },
  };
};

export const generateComment = (): Comment => {
  return {
    commentId: faker.number.int({ min: 0, max: 99999 }),
    author: {
      userId: faker.number.int({ min: 0, max: 99999 }),
      name: faker.name.firstName(),
    },
    contents: faker.lorem.paragraphs(),
    subComments: [],
    regiDate: faker.date.past().toISOString().split('T')[0],
    modiDate: faker.date.past().toISOString().split('T')[0],
  };
};
