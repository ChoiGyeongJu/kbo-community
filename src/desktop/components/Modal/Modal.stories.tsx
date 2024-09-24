import Modal from './Modal';
import { UIButton } from '../UI/UIButton';

import type { Meta, StoryObj } from '@storybook/react';

import { ModalProvider } from '$contexts/ModalContext';
import { useModal } from '$shared/hooks';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'components/Modal',
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <ModalProvider>
        <Modal />
        <Story />
      </ModalProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: '전역 modal 컴포넌트',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const { openModal, closeModal } = useModal();

    const handleOpenModal = () => {
      openModal({
        title: 'Storybook Modal',
        contents: <div>Contents Area</div>,
        buttons: [
          { text: '취소', variant: 'contained', onClick: () => closeModal() },
          { text: '확인', variant: 'outlined', onClick: () => closeModal() },
        ],
      });
    };

    return (
      <div>
        <UIButton onClick={handleOpenModal}>open modal</UIButton>
      </div>
    );
  },
};
