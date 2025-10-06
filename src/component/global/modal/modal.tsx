"use client";

import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";

interface modalProps {
  open: boolean;
  onClose: () => void;
  modalTitle: string;
  modalDescription: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  background?: string;
}

export const ModalComponent = ({
  open,
  onClose,
  modalTitle,
  modalDescription,
  children,
  style,
  background,
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
      style={style}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          outline: "none",
          boxShadow: "none",
          background: background ? background : "transparent",
        }}
      >
        {children}
      </div>
    </Modal>
  );
};
