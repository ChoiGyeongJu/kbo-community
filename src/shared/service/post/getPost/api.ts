import axios from 'axios';

import { PostDetail } from '$shared/types';

type ReqGetPost = Pick<PostDetail, 'postId'>;
type ResGetPost = { post: PostDetail };

const getPost = async (dto: ReqGetPost): Promise<ResGetPost> => {
  return await axios.get(`/post/${dto.postId}`);
};

export default getPost;
export type { ReqGetPost, ResGetPost };
