import axios from 'axios';

import { PostInfo } from '$shared/types';

type ReqPutPost = Pick<PostInfo, 'postId' | 'title' | 'contents'>;

const putPost = async (dto: ReqPutPost) => {
  return await axios.put(`/post`, dto);
};

export default putPost;
export type { ReqPutPost };
