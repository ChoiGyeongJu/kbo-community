interface PostInfo {
  postId: number;
  author: {
    userId: number;
    name: string;
  };
  title: string;
  contents: string;
  viewCounts: number;
  likeCounts: number;
  regiDate: string;
  modiDate: string;
}

export type { PostInfo };
