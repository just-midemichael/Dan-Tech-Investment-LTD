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
  const appBody = document.getElementById("app-body");

  if (appBody) {
    appBody.style.overflow = open ? "hidden" : "auto";
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby={`${modalTitle}-modal`}
        aria-describedby={`${modalDescription}-modal`}
      >
        <>{children}</>
      </Modal>
    </div>
  );
};
