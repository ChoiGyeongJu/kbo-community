import { TableRow, TableCell } from '@mui/material';
import styled from 'styled-components';

import { PostInfo } from '$shared/types';
import { formatNumber } from '$shared/utils';

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
      <TableCell sx={{ width: '4%' }}>{postId}</TableCell>
      <TableCell className="ellipsis" sx={{ width: '70%' }}>
        {title}
      </TableCell>
      <TableCell sx={{ width: '10%' }}>
        <span className="ellipsis">{author.name}</span>
      </TableCell>
      <TableCell sx={{ width: '7%', minWidth: '90px' }}>{regiDate}</TableCell>
      <TableCell sx={{ width: '5%', minWidth: '40px' }}>{formatNumber(viewCounts)}</TableCell>
      <TableCell sx={{ width: '4%', minWidth: '40px' }}>{formatNumber(likeCounts)}</TableCell>
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
    white-space: nowrap;
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
