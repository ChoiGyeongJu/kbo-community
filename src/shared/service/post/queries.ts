import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { getPost, ReqGetPost } from './getPost';
import { getPostList, ReqGetPostList } from './getPostList';

const postQueries = {
  serviceGetPost: ({ postId }: ReqGetPost) =>
    queryOptions({
      queryKey: ['post', postId] as const,
      queryFn: () => getPost({ postId }),
      enabled: !!postId,
    }),
  serviceGetPostList: ({ boardType, page, size, keyword }: ReqGetPostList) =>
    queryOptions({
      queryKey: ['postList', { boardType, page, size, keyword }] as const,
      queryFn: () => getPostList({ boardType, page, size, keyword }),
      placeholderData: keepPreviousData,
    }),
};

export default postQueries;
