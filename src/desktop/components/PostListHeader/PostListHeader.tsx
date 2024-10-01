import { ListSubheader, TableCell } from '@mui/material';

import styled from 'styled-components';

const PostListHeader = () => {
  return (
    <StyledSubHeader>
      <TableCell style={{ width: '2%' }}>NO</TableCell>
      <TableCell style={{ width: '70%' }}>제목</TableCell>
      <TableCell style={{ width: '10%' }}>작성자</TableCell>
      <TableCell style={{ width: '12%' }}>작성일</TableCell>
      <TableCell style={{ width: '7%' }}>조회수</TableCell>
      <TableCell style={{ width: '7%' }}>추천수</TableCell>
    </StyledSubHeader>
  );
};
const StyledSubHeader = styled(ListSubheader)`
  width: 100%;
  height: 50px;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #cfcfd1;
  border-top: 2px solid #7c7c7c;
  background-color: #f2f2f2 !important;

  & td {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border: none;
    user-select: none;
  }
`;
export default PostListHeader;
