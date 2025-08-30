"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContactContentWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 30,
  padding: "80px 0",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "40px 0 60px",
  },
});
