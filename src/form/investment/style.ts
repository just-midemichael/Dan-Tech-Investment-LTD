"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { appStyle } from "@/db/appStyle";

export const Form = styled("form")({
  //   border: "1px solid gold",
  width: "100%",
  maxWidth: "600px",
  height: "fit-content",
  maxHeight: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  background: "#ffff",
  borderRadius: "8px",
  padding: "20px",
  paddingTop: "0",
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
  justifyContent: "flex-end",
  alignItems: "center",
  position: "sticky",
  top: "0px",
  zIndex: 10,
  fontSize: "1.8rem",
  backdropFilter: "blur(2px)",
  "@media (max-width: 800px)": {
    minHeight: "60px",
    fontSize: "2.2rem",
  },
});

export const FormContentBox = styled(Box)({
  border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 12,
  "@media (max-width: 800px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "1000px",
  },
});

export const BoxTwo = styled(Box)({
  // border: "1px solid red",
  padding: "0 10px",
  minHeight: "20px",
});

export const InputBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
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
    fontSize: "1.05rem",
    textTransform: "none",
  },
  "@media (max-width: 800px)": {
    height: "50px",
  },
});

export const ButtonBox = styled(Box)({
  border: "1px solid red",
  width: "100%",
  maxWidth: "fit-content",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
