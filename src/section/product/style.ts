"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProductContentWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 30,
  padding: "100px 0",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "60px 0",
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  "@media (max-width: 1000px)": {
    textAlign: "center !important",
  },
});

export const ProductBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
  padding: "40px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 60,
  "@media (max-width: 1000px)": {
    minWidth: "100%",
  },
  "@media (max-width: 800px)": {
    gap: 30,
  },
});
