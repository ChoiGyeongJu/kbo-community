import { Dialog, DialogTitle, DialogContentText } from '@mui/material';

import { styled } from 'styled-components';

import { useModal } from '$shared/hooks';
import { UIButton } from '../UI/UIButton';

const Modal: React.FC = () => {
  const { isOpen, modalProps, closeModal } = useModal();

  if (!isOpen || !modalProps) return null;

  const { width = 360, title, contents, buttons } = modalProps;

  return (
    <DialogWrapper open={isOpen} width={width} onClose={closeModal}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {contents && <StyledContent>{contents}</StyledContent>}
      {buttons && (
        <ButtonWrapper>
          {buttons.map(btn => (
            <UIButton
              key={btn.text}
              fullWidth
              size="large"
              variant={btn.variant}
              onClick={btn.onClick}
            >
              {btn.text}
            </UIButton>
          ))}
        </ButtonWrapper>
      )}
    </DialogWrapper>
  );
};

export default Modal;

const DialogWrapper = styled(Dialog)<{ width: number }>`
  & .MuiPaper-root {
    min-width: unset;
    width: ${props => `${props.width}px`};
  }
`;

const StyledTitle = styled(DialogTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  font-weight: 800 !important;
`;

const StyledContent = styled(DialogContentText)`
  display: flex;
  justify-content: center;
  margin: 12px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 12px;
`;
