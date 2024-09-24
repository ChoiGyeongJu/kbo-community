import axios from 'axios';

import { PostInfo } from '$shared/types';

type ResGetPostList = { totalCount: number; postList: PostInfo[] };

const getPostList = async (dto: ReqGetPostList): Promise<ResGetPostList> => {
  return await axios.get(`/post?page=${dto.page}`);
};

export default getPostList;
export type { ReqGetPostList, ResGetPostList };
