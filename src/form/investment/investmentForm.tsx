import React from "react";
import { ButtonBox, CloseIconBox, Form, FormContentBox } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { appStyle } from "@/db/appStyle";

interface InvestmentFormProps {
  onClose: () => void;
}
export const InvestmentForm = ({ onClose }: InvestmentFormProps) => {
  return (
    <Form>
      <CloseIconBox>
        <CloseIcon
          fontSize="inherit"
          style={{ color: appStyle.headerTitleColor, cursor: "pointer" }}
          onClick={onClose}
          titleAccess="Close form"
        />
      </CloseIconBox>
      <FormContentBox></FormContentBox>
      <ButtonBox>Button</ButtonBox>
    </Form>
  );
};
