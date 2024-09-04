import { useMutation, useQueryClient } from '@tanstack/react-query';

import createPost, { ReqCreatePost } from './api';

interface Props {
  onSuccessCallback?: () => void;
}

const useCreatePostMutation = ({ onSuccessCallback }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: ReqCreatePost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postList'] });
      onSuccessCallback?.();
    },
    onError: error => console.error(error),
  });
};

export default useCreatePostMutation;
