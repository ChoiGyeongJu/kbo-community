import axios from 'axios';

import { Post } from '$shared/types';
import { generatePostList } from '$shared/utils';

interface ReqGetPostList {
  category: string;
  page: number;
  size: number;
  keyword?: string;
}
type ResGetPostList = { totalCount: number; postList: Post[] };

const getPostList = async (dto: ReqGetPostList): Promise<ResGetPostList> => {
  if (import.meta.env.MODE === 'localDev') {
    return generatePostList(dto.size);
  }
  return await axios.get(`/post?page=${dto.page}&size=${dto.size}`);
};

export default getPostList;
export type { ReqGetPostList, ResGetPostList };
