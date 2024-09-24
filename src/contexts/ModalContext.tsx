import { createContext, useState, ReactNode } from 'react';

import { Modal } from '$desktop/components/Modal';
import { UIButton } from '$desktop/components/UI/UIButton';

interface ButtonProps {
  text: string;
  variant: React.ComponentProps<typeof UIButton>['variant'];
  onClick: () => void;
}

interface ModalContextProps {
  openModal: (props: ModalProps) => void;
  closeModal: () => void;
  isOpen: boolean;
  modalProps: ModalProps | null;
}

interface ModalProps {
  width?: number;
  title?: string;
  contents?: ReactNode;
  buttons?: ButtonProps[];
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (props: ModalProps) => {
    setModalProps(props);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, modalProps }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
