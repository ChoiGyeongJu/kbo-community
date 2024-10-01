import axios from 'axios';

import { PostDetail } from '$shared/types';
import { generatePostDetail } from '$shared/utils';

type ReqGetPost = Pick<PostDetail, 'postId'>;
type ResGetPost = { post: PostDetail };

const getPost = async (dto: ReqGetPost): Promise<ResGetPost> => {
  if (import.meta.env.MODE === 'localDev') {
    return generatePostDetail();
  }
  return await axios.get(`/post/${dto.postId}`);
};

export default getPost;
export type { ReqGetPost, ResGetPost };
