import { styled } from 'styled-components';

import { Comment as IComment } from '$shared/types';
import { Comment } from './Comment';
import { InputForm } from './InputForm';

interface Props {
  commentCnt: number;
  comments: IComment[];
}

const Comments = ({ commentCnt, comments }: Props) => {
  const handleClickRegister = ({
    commentId,
    parentId,
  }: {
    commentId?: number;
    parentId?: number;
  }) => {
    if (commentId !== undefined) {
      // 댓글 수정
    } else if (parentId !== undefined) {
      // 답글 등록
    } else {
      // 댓글 등록
    }
  };

  const handleClickDelete = (id: number) => {
    // 댓글 삭제 api 호출
  };

  return (
    <ListWrapper>
      <div className="comment-cnt">
        <span>{commentCnt}</span>개의 댓글
      </div>
      <InputWrapper>
        <InputForm onClickRegister={handleClickRegister} />
      </InputWrapper>
      {comments.map(v => (
        <>
          <Comment
            key={v.commentId}
            comment={v}
            onClickRegister={handleClickRegister}
            onClickDelete={handleClickDelete}
          />
          {v.subComments?.map(sub => (
            <Comment
              key={sub.commentId}
              isSub={true}
              comment={sub}
              onClickRegister={handleClickRegister}
              onClickDelete={handleClickDelete}
            />
          ))}
        </>
      ))}
    </ListWrapper>
  );
};

export default Comments;

const ListWrapper = styled.div`
  width: 100%;
  & .comment-cnt {
    margin-bottom: 12px;
    & span {
      margin-right: 2px;
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 12px;
`;
