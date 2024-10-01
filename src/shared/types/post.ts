interface Post {
  postId: number;
  author: {
    userId: number;
    name: string;
  };
  title: string;
  viewCnt: number;
  likeCnt: number;
  regiDate: string;
  modiDate: string;
}

interface PostDetail extends Post {
  contents: string;
  // comment
}

export type { Post, PostDetail };
