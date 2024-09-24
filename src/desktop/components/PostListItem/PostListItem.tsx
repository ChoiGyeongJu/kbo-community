import { TableRow, TableCell } from '@mui/material';
import styled from 'styled-components';

import { PostInfo } from '$shared/types';

export type PostListItemField = Pick<
  PostInfo,
  'postId' | 'title' | 'author' | 'viewCounts' | 'likeCounts' | 'regiDate'
>;

interface Props {
  postInfo: PostListItemField;
  onClickPost: (postId: number) => void;
}

const PostListItem = ({ postInfo, onClickPost }: Props) => {
  const { postId, title, author, viewCounts, likeCounts, regiDate } = postInfo;

  return (
    <StyledTableRow hover onClick={() => onClickPost(postId)}>
      <TableCell>{postId}</TableCell>
      <TableCell className="title">{title}</TableCell>
      <TableCell>{author.name}</TableCell>
      <TableCell>{viewCounts}</TableCell>
      <TableCell>{likeCounts}</TableCell>
      <TableCell>{regiDate}</TableCell>
    </StyledTableRow>
  );
};

const StyledTableRow = styled(TableRow)`
  width: 100%;
  display: flex !important;
  justify-content: center;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  & td {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border: none;
  }
  & .title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: auto;
  }
`;

export default PostListItem;
