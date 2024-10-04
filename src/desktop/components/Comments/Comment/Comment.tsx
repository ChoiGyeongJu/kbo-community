import { useState } from 'react';

import { CommentOutlined, Reply } from '@mui/icons-material';
import { Avatar } from '@mui/material';

import styled from 'styled-components';

import { Comment as IComment } from '$shared/types/comment';
import { InputForm } from '../InputForm';

interface Props {
  comment: IComment;
  onClickRegister: (id: number) => void;
}

const Comment = ({ comment, onClickRegister }: Props) => {
  const [isReply, setIsReply] = useState<boolean>(false);
  const handleClickReply = () => {
    setIsReply(prev => !prev);
  };
  return (
    <>
      <Wrapper>
        <Avatar sizes="small" />
        <Column>
          <p className="name">{comment.author.name}</p>
          <div className="contents">{comment.contents}</div>
          <div className="date">
            <span>
              {comment.regiDate !== comment.modiDate
                ? comment.modiDate + ' 수정'
                : comment.regiDate}
              &nbsp;&middot;
            </span>
            <div className="sub-comment" onClick={handleClickReply}>
              <CommentOutlined />
              답글쓰기
            </div>
          </div>
        </Column>
      </Wrapper>
      {isReply && (
        <Wrapper>
          <Reply className="reply-icon" />
          <InputForm commentId={comment.commentId} onClickRegister={onClickRegister} />
        </Wrapper>
      )}
    </>
  );
};

export default Comment;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 4px 20px 20px;
  border-bottom: 1px solid #e8eaed;
  & .reply-icon {
    margin: 10px 10px 0 0;
    transform: rotate(180deg);
    color: #5f6368;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  & .name {
    margin: 4px 0;
    font-size: 15px;
    font-weight: 500;
  }
  & .contents {
    font-size: 14px;
    font-weight: 400;
  }
  & .date {
    user-select: none;
    margin-top: 12px;
    color: #5f6368;
    font-size: 13px;
    display: flex;
    align-items: center;
    & .sub-comment {
      cursor: pointer;
      display: flex;
      margin-left: 4px;
      padding: 4px;
      border-radius: 6px;
      gap: 4px;
      &:hover {
        background: rgba(0, 0, 0, 0.06);
      }
      & svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
