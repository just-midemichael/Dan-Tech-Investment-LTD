import React, { useEffect } from "react";
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
  useEffect(() => {
    const appBody = document.getElementById("app-body");
    if (appBody) {
      appBody.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={`${modalTitle}-modal`}
      aria-describedby={`${modalDescription}-modal`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>{children}</>
    </Modal>
  );
};
