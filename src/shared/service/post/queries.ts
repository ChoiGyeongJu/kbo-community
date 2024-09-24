import { queryOptions } from '@tanstack/react-query';

import { getPost, ReqGetPost } from './getPost';
import { getPostList, ReqGetPostList } from './getPostList';

const postQueries = {
  serviceGetPost: ({ postId }: ReqGetPost) =>
    queryOptions({
      queryKey: ['post', postId] as const,
      queryFn: () => getPost({ postId }),
      enabled: !!postId,
    }),
  serviceGetPostList: ({ category, page, size, keyword }: ReqGetPostList) =>
    queryOptions({
      queryKey: ['postList', { category, page, size, keyword }] as const,
      queryFn: () => getPostList({ category, page, size, keyword }),
    }),
};

export default postQueries;
