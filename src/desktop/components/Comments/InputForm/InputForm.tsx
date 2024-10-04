import { useState } from 'react';

import styled from 'styled-components';

import { UIButton } from '$desktop/components/UI';

interface Props {
  commentId?: number;
  onClickRegister: (id: number) => void;
}

const InputForm = ({ commentId, onClickRegister }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleRegister = () => {
    // TODO: 답글, 새댓글 등록 처리
    if (commentId) onClickRegister(commentId);
    else onClickRegister(0);
  };

  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="댓글을 입력해주세요."
      />
      <ButtonWrapper>
        <UIButton variant="contained" onClick={handleRegister}>
          등록
        </UIButton>
      </ButtonWrapper>
    </InputWrapper>
  );
};

export default InputForm;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  padding: 14px 20px 10px 16px;
  box-sizing: border-box;
  background: #f8f9fa;
  border-radius: 8px;
`;

const StyledInput = styled.textarea`
  width: 100%;
  height: 100px;
  background: inherit;
  border: none;
  resize: none;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 12px;
  & button {
    height: 28px;
  }
`;
