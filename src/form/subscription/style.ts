"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { appStyle } from "@/db/appStyle";

export const Form = styled("form")({
  border: "1xp solid red",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 12,
  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
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
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "fit-content",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
