import React from "react";
import Modal from "@mui/material/Modal";

interface modalProps {
  open: boolean;
  onClose: () => void;
  modalTitle: string;
  modalDescription: string;
  children: React.ReactNode;
}

export const ModalComponent = ({
  open,
  onClose,
  modalTitle,
  modalDescription,
  children,
}: modalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby={`${modalTitle}-modal`}
        aria-describedby={`${modalDescription}-modal`}
      >
        <React.Fragment>{children}</React.Fragment>
      </Modal>
    </div>
  );
};
