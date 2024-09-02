interface PostInfo {
  postId: number;
  author: {
    userId: number;
    name: string;
  };
  title: string;
  contents: string;
  regiDate: string;
  modiDate: string;
}

export type { PostInfo };
