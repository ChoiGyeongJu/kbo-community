import { TableRow, TableCell } from '@mui/material';
import styled from 'styled-components';

import { PostInfo } from '$shared/types';

interface Props {
  rowId: number;
  postInfo: Pick<
    PostInfo,
    'postId' | 'title' | 'author' | 'viewCounts' | 'likeCounts' | 'regiDate'
  >;
  onClickPost: (postId: number) => void;
}

const PostListItem = ({ rowId, postInfo, onClickPost }: Props) => {
  const { postId, title, author, viewCounts, likeCounts, regiDate } = postInfo;

  return (
    <StyledTableRow hover onClick={() => onClickPost(postId)}>
      <TableCell sx={{ width: '2%' }}>{rowId}</TableCell>
      <TableCell className="ellipsis" sx={{ width: '75%' }}>
        {title}
      </TableCell>
      <TableCell sx={{ width: '10%', minWidth: '120px' }}>
        <span className="ellipsis">{author.name}</span>
      </TableCell>
      <TableCell sx={{ width: 'auto', flexShrink: 0 }}>{regiDate}</TableCell>
      <TableCell sx={{ width: '3%' }}>{viewCounts}</TableCell>
      <TableCell sx={{ width: '3%' }}>{likeCounts}</TableCell>
    </StyledTableRow>
  );
};

const StyledTableRow = styled(TableRow)`
  width: 100%;
  display: flex !important;
  justify-content: center;
  cursor: pointer;

  & td {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }

  & .ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PostListItem;
