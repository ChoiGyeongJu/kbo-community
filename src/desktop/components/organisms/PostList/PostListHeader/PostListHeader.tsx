import { ListSubheader } from '@mui/material';
import styled from 'styled-components';

const PostListHeader = () => {
  return (
    <StyledSubHeader>
      <span style={{ width: '4%' }}>번호</span>
      <span style={{ width: '70%' }}>제목</span>
      <span style={{ width: '10%' }}>글쓴이</span>
      <span style={{ width: '7%', minWidth: '90px' }}>작성일</span>
      <span style={{ width: '5%', minWidth: '40px' }}>조회</span>
      <span style={{ width: '4%', minWidth: '40px' }}>추천</span>
    </StyledSubHeader>
  );
};

const StyledSubHeader = styled(ListSubheader)`
  width: 100%;
  height: 60px;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid gray;

  & span {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    padding: 12px;
    user-select: none;
  }
`;

export default PostListHeader;
