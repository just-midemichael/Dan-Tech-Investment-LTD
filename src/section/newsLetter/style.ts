"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const NewsLetterContentWrapper = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 50,
  padding: "0 0 60px",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
});
