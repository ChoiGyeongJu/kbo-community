import axios from 'axios';

import { Post } from '$shared/types';

interface ReqGetPostList {
  categoryId: number;
  page: number;
  size: number;
  keyword?: string;
}
type ResGetPostList = { totalCount: number; postList: Post[] };

const getPostList = async (dto: ReqGetPostList): Promise<ResGetPostList> => {
  return await axios.get(`/post?page=${dto.page}&size=${dto.size}`);
};

export default getPostList;
export type { ReqGetPostList, ResGetPostList };
