import { queryOptions } from '@tanstack/react-query';

import { getPost, ReqGetPost } from './getPost';
import { getPostList, ReqGetPostList } from './getPostList';

const postQueries = {
  serviceGetPost: ({ postId }: ReqGetPost) =>
    queryOptions({
      queryKey: ['post', postId],
      queryFn: () => getPost({ postId }),
      enabled: !!postId,
    }),
  serviceGetPostList: ({ page }: ReqGetPostList) =>
    queryOptions({
      queryKey: ['postList', page],
      queryFn: () => getPostList({ page }),
    }),
};

export default postQueries;
