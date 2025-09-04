"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const HeroContentWraper = styled(Box)({
  // border: "2px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "50px 0",
  gap: 50,
  "@media (max-width: 1000px)": {
    minHeight: "fit-content",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
});

export const TextFocalBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "800px",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 30,
  "@media (max-width: 1000px)": {
    maxWidth: "600px",
  },
  "@media (max-width: 800px)": {
    maxWidth: "540px",
  },
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  width: "100%",
  "@media (max-width: 1000px)": {
    textAlign: "center !important",
  },
});
