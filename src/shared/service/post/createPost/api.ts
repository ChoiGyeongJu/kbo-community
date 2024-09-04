import axios from 'axios';

import { PostInfo } from '$shared/types';

type ReqCreatePost = Pick<PostInfo, 'title' | 'contents'>;
type ResCreatePost = { postId: number };

const createPost = async (dto: ReqCreatePost): Promise<ResCreatePost> => {
  return await axios.post(`/post`, dto);
};

export default createPost;
export type { ReqCreatePost, ResCreatePost };
