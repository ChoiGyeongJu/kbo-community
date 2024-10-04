import { useState } from 'react';

import styled from 'styled-components';

import { UIButton } from '$desktop/components/UI';

interface Props {
  initValue?: string;
  commentId?: number; // 수정시 사용
  parentId?: number; // 답글시 사용
  onClickRegister: ({ commentId, parentId }: { commentId?: number; parentId?: number }) => void;
}

const InputForm = ({ commentId, initValue, parentId, onClickRegister }: Props) => {
  const [value, setValue] = useState<string>(initValue ?? '');

  const handleRegister = () => {
    if (commentId) {
      onClickRegister({ commentId });
    } else if (parentId) {
      onClickRegister({ parentId });
    } else {
      onClickRegister({});
    }
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
