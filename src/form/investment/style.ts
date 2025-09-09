"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { appStyle } from "@/db/appStyle";

export const Form = styled("form")({
  //   border: "1px solid gold",
  width: "100%",
  maxWidth: "660px",
  height: "fit-content",
  maxHeight: "540px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  background: "#ffff",
  borderRadius: "8px",
  padding: "0 20px 80px 20px",
  overflowX: "hidden",
  position: "relative",
  "@media (max-width: 800px)": {
    maxWidth: "100%",
    minHeight: "100%",
    borderRadius: "0px",
  },
});

export const CloseIconBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "55px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: "0px",
  zIndex: 10,
  fontSize: "1.8rem",
  backdropFilter: "blur(3px)",
  "@media (max-width: 800px)": {
    minHeight: "60px",
    fontSize: "2.2rem",
  },
});

export const FormContentBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  "@media (max-width: 800px)": {
    alignItems: "flex-start",
  },
});

export const BoxWrapper = styled(Box)({
  //   border: "1px solid teal",
  width: "100%",
  height: "fit-content",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 20,
  "@media (max-width: 800px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const InputBox = styled(Box)({
  border: "1px solid silver",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
});

export const Input = styled("input")({
  height: "54px",
  width: "100%",
  padding: "10px 20px",
  border: "none",
  outline: "none",
  color: appStyle.headerTitleColor,
  backgroundColor: "#fff",
  fontSize: "1.0rem",
  "::placeholder": {
    color: appStyle.headerTitleColor,
    opacity: 0.8,
    fontSize: "1.00rem",
    textTransform: "none",
  },
  "@media (max-width: 800px)": {
    height: "50px",
  },
});

export const EmailInput = styled("input")({
  height: "54px",
  width: "100%",
  padding: "10px 20px",
  border: "none",
  outline: "none",
  color: appStyle.headerTitleColor,
  backgroundColor: "#fff",
  fontSize: "1.0rem",
  textTransform: "lowercase",
  "::placeholder": {
    color: appStyle.headerTitleColor,
    opacity: 0.8,
    fontSize: "1.00rem",
    textTransform: "none",
  },
  "@media (max-width: 800px)": {
    height: "50px",
  },
});

export const Label = styled("label")({
  //   border: "1px solid teal",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  minHeight: "20px",
  gap: 10,
});

export const Check = styled("input")({
  width: "14px",
  height: "14px",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "10px",
});

export const Span = styled("span")({
  color: appStyle.headerTitleColor,
  backgroundColor: "#fff",
  fontSize: "0.9rem",
});

export const ButtonBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0",
});
