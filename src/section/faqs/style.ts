"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FaqsContentWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 20,
  padding: "40px 0 80px",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "20px 0 60px",
  },
});
