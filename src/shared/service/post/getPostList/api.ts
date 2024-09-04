import axios from 'axios';

import { PostInfo } from '$shared/types';

type ReqGetPostList = { page: number };
type ResGetPostList = { postList: PostInfo[] };

const getPostList = async (dto: ReqGetPostList): Promise<ResGetPostList> => {
  return await axios.get(`/post?page=${dto.page}`);
};

export default getPostList;
export type { ReqGetPostList, ResGetPostList };
