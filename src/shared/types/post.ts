import { Comment } from './comment';
import { Author } from './user';

interface Post {
  postId: number;
  author: Author;
  title: string;
  viewCnt: number;
  likeCnt: number;
  regiDate: string;
  modiDate: string;
}

interface PostDetail extends Post {
  contents: string;
  comments: Comment[];
}

export type { Post, PostDetail };
