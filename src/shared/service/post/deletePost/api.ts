import axios from 'axios';

import { PostInfo } from '$shared/types';

type ReqDeletePost = Pick<PostInfo, 'postId'>;

const deletePost = async (postId: ReqDeletePost) => {
  return await axios.delete(`/post/${postId}`);
};

export default deletePost;
export type { ReqDeletePost };
