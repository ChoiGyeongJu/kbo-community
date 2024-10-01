import axios from 'axios';

import { PostDetail } from '$shared/types';

type ReqPutPost = Pick<PostDetail, 'postId' | 'title' | 'contents'>;

const putPost = async (dto: ReqPutPost) => {
  return await axios.put(`/post`, dto);
};

export default putPost;
export type { ReqPutPost };
