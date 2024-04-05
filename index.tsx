import React from "react";
import { ModalContainer, ModalContent, ModalHeader, CloseButton } from "./styled";


interface ModalProps {
  closeModal: (message: string) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).className === "modal-container") {
      closeModal("Modal was closed");
    }
  };

  return (
    <ModalContainer onClick={handleModalClick}>
      <ModalContent>
        <ModalHeader onClick={() => closeModal("Modal was closed")}>
          <CloseButton>&times;</CloseButton>
        </ModalHeader>
        <div className="modal-content">{children}</div>
      </ModalContent>
    </ModalContainer>
  );  
};

export default Modal;
