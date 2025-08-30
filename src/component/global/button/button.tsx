import React from "react";
import { ButtonComponent } from "./style";
import { Paragraph1 } from "../paragraph/paragraph";

interface ActionButtonProps {
  text: React.ReactNode;
  children?: React.ReactNode;
  id: string;
  ariaLabel: string;
  type?: "button" | "submit" | "reset" | undefined;
  fontWeight?: number | string;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ActionButton = ({
  text,
  children,
  id,
  ariaLabel,
  type,
  fontWeight,
  style,
  onClick,
}: ActionButtonProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      style={style}
      id={id}
      aria-label={ariaLabel}
      type={type}
    >
      <Paragraph1
        style={{ fontWeight: fontWeight, textTransform: "capitalize" }}
      >
        {text}
      </Paragraph1>
      {children}
    </ButtonComponent>
  );
};
