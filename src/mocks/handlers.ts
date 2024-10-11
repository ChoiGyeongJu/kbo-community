import { rest } from 'msw';

import { generatePostDetail, generatePostList } from '$shared/utils';

export const handlers = [
  // 게시글 리스트 api mocking
  rest.get('/post', (req, res, ctx) => {
    const size = req.url.searchParams.get('size');
    return res(
      ctx.status(200),
      ctx.json({
        totalCount: Number(size ?? 0),
        postList: generatePostList(Number(size ?? 0)),
      })
    );
  }),

  // 게시글 상세보기 api mocking
  rest.get('/post/:postId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generatePostDetail()));
  }),
];
