import { useState } from 'react';

import { CommentOutlined, Reply, MoreVert as MenuIcon } from '@mui/icons-material';
import { Avatar, Menu, MenuItem } from '@mui/material';

import styled from 'styled-components';

import { useModal } from '$shared/hooks';
import { Comment as IComment } from '$shared/types/comment';
import { InputForm } from '../InputForm';

interface Props {
  isSub?: boolean;
  comment: IComment;
  onClickRegister: ({ commentId, parentId }: { commentId?: number; parentId?: number }) => void;
  onClickDelete: (id: number) => void;
}

const Comment = ({ isSub = false, comment, onClickRegister, onClickDelete }: Props) => {
  const { openModal, closeModal } = useModal();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isReply, setIsReply] = useState<boolean>(false);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClickReply = () => {
    setIsReply(prev => !prev);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
    setAnchorEl(null);
  };

  const handleClickDelete = () => {
    setAnchorEl(null);
    openModal({
      title: '댓글을 삭제하시겠습니까?',
      buttons: [
        { text: '취소', onClick: () => closeModal(), variant: 'outlined' },
        {
          text: '확인',
          onClick: () => {
            onClickDelete(comment.commentId);
            closeModal();
          },
          variant: 'contained',
        },
      ],
    });
  };

  return (
    <>
      {isEdit ? (
        <InputForm
          commentId={comment.commentId}
          initValue={comment.contents}
          onClickRegister={({ commentId }) => {
            onClickRegister({ commentId });
            setIsEdit(false);
          }}
        />
      ) : (
        <Wrapper>
          {isSub && <Reply className="reply-icon" />}
          <Avatar sizes="small" />
          <Column>
            <MenuWrap>
              <p>{comment.author.name}</p>
              <div className="menu-icon" onClick={handleOpenMenu}>
                <MenuIcon />
              </div>
            </MenuWrap>
            <div className="contents">{comment.contents}</div>
            <div className="date">
              <span>
                {comment.regiDate !== comment.modiDate
                  ? comment.modiDate + ' 수정'
                  : comment.regiDate}
              </span>
              {!isSub && (
                <div className="sub-comment" onClick={handleClickReply}>
                  <CommentOutlined />
                  답글쓰기
                </div>
              )}
            </div>
          </Column>
        </Wrapper>
      )}

      {isReply && (
        <Wrapper>
          <Reply className="reply-icon" />
          <InputForm
            parentId={comment.commentId}
            onClickRegister={({ parentId }) => {
              onClickRegister({ parentId });
              setIsReply(false);
            }}
          />
        </Wrapper>
      )}

      {!!anchorEl && (
        <Menu
          autoFocus={false}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={handleClickEdit}>수정</MenuItem>
          <MenuItem onClick={handleClickDelete}>삭제</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default Comment;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 4px 20px 10px;
  border-bottom: 1px solid #e8eaed;
  & .reply-icon {
    margin: 10px 16px 0 0;
    transform: rotate(180deg);
    color: #5f6368;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
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
      margin-left: 8px;
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

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    margin: 4px 0;
    font-size: 15px;
    font-weight: 500;
  }
  & .menu-icon {
    cursor: pointer;
  }
`;
