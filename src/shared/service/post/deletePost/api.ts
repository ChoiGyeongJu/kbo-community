import { PostInfo } from '@shared/types';
import axios from 'axios';

type ReqDeletePost = Pick<PostInfo, 'postId'>;

const deletePost = async (postId: ReqDeletePost) => {
  return await axios.delete(`/post/${postId}`);
};

export default deletePost;
export type { ReqDeletePost };
