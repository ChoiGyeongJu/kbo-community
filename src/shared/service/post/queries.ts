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
  serviceGetPostList: ({ categoryId, page, size, keyword }: ReqGetPostList) =>
    queryOptions({
      queryKey: ['postList', { categoryId, page, size, keyword }] as const,
      queryFn: () => getPostList({ categoryId, page, size, keyword }),
    }),
};

export default postQueries;
