"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const CoreValueContentWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: 30,
  padding: "80px 0",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "40px 0",
  },
});

export const TitleButtonBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "500px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media (max-width: 1000px)": {
    maxWidth: "100%",
  },
});

export const ValueBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  minWidth: "600px",
  height: "100%",
  minHeight: "400px",
  paddingLeft: "30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexDirection: "column",
  "@media (max-width: 1000px)": {
    minWidth: "100%",
  },
  "@media (max-width: 800px)": {
    paddingLeft: "15px",
  },
});
