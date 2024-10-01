import { Avatar } from '@mui/material';

import { styled } from 'styled-components';

const PostAuthor = ({
  imgSrc,
  name,
  date,
  viewCnt,
}: {
  imgSrc?: string;
  name: string;
  date: string;
  viewCnt: number;
}) => {
  return (
    <Wrapper>
      <Avatar sizes="small" src={imgSrc} />
      <span className="name">{name}</span>
      <div className="info">
        <span>조회수 {viewCnt} &middot;</span>
        <span> {date}</span>
      </div>
    </Wrapper>
  );
};

export default PostAuthor;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;

  & .name {
    font-size: 18px;
  }
  & .info {
    margin-left: auto;
  }
`;
