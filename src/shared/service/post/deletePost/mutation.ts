import { useMutation, useQueryClient } from '@tanstack/react-query';
import deletePost, { ReqDeletePost } from './api';

const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: ReqDeletePost) => deletePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['postList'] });
    },
    onError: error => console.error(error),
  });
};

export default useDeletePostMutation;
