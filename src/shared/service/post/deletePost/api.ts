import axios from 'axios';

import { Post } from '$shared/types';

type ReqDeletePost = Pick<Post, 'postId'>;

const deletePost = async (postId: ReqDeletePost) => {
  return await axios.delete(`/post/${postId}`);
};

export default deletePost;
export type { ReqDeletePost };
