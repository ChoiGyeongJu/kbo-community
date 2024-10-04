import { Author } from './user';

interface Comment {
  commentId: number;
  author: Author;
  contents: string;
  subComments: Comment[];
  regiDate: string;
  modiDate: string;
}

export type { Comment };
