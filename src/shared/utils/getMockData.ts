import { faker } from '@faker-js/faker';

import { ResGetPostList } from '$shared/service/post/getPostList';
import { Post } from '$shared/types';

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
