import { useMutation, useQueryClient } from '@tanstack/react-query';

import putPost, { ReqPutPost } from './api';

const usePutPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: ReqPutPost) => putPost(post),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['post', variables.postId] });
      queryClient.invalidateQueries({ queryKey: ['postList'] });
    },
    onError: error => console.error(error),
  });
};

export default usePutPostMutation;
