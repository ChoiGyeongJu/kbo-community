import axios from 'axios';

import { BoardType, Post } from '$shared/types';

interface ReqGetPostList {
  boardType: BoardType;
  page: number;
  size: number;
  keyword?: string;
}
type ResGetPostList = { totalCount: number; postList: Post[] };

const getPostList = async (dto: ReqGetPostList): Promise<ResGetPostList> => {
  const res = await axios.get(`/post?page=${dto.page}&size=${dto.size}`);
  return res.data;
};

export default getPostList;
export type { ReqGetPostList, ResGetPostList };
