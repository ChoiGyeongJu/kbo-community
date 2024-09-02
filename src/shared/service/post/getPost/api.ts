import { PostInfo } from '@shared/types';

type ReqGetPost = Pick<PostInfo, 'postId'>;
type ResGetPost = { post: PostInfo };

const mockData = {
  post: {
    postId: 1,
    author: {
      userId: 1,
      name: '홍길동',
    },
    title: '테스트 제목',
    contents: '테스트 내용',
    regiDate: '',
    modiDate: '',
  },
};

const getPost = async (dto: ReqGetPost): Promise<ResGetPost> => {
  console.log('get post api 호출: ', dto);
  return mockData;
  // return await axios.get(`/post/${dto.postId}`);
};

export default getPost;
export type { ReqGetPost, ResGetPost };
