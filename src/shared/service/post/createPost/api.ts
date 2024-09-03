import { PostInfo } from '@shared/types';
import axios from 'axios';

type ReqCreatePost = Pick<PostInfo, 'title' | 'contents'>;
type ResCreatePost = { postId: number };

const createPost = async (dto: ReqCreatePost): Promise<ResCreatePost> => {
  return await axios.post(`/post`, dto);
};

export default createPost;
export type { ReqCreatePost, ResCreatePost };
