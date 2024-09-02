import { queryOptions } from '@tanstack/react-query';

import { getPost, ReqGetPost } from './getPost';

const postQueries = {
  serviceGetPost: ({ postId }: ReqGetPost) =>
    queryOptions({
      queryKey: ['post', postId],
      queryFn: () => getPost({ postId }),
      enabled: !!postId,
    }),
};

export default postQueries;
