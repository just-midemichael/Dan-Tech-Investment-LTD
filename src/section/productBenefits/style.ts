"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const BenefitsContentWrapper = styled(Box)({
  //   border: "2px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-Start",
  alignItems: "center",
  flexDirection: "column",
  padding: "80px 0",
  gap: 70,
  "@media (max-width: 800px)": {
    minHeight: "fit-content",
    flexDirection: "column",
    padding: "50px 0",
    gap: 40,
  },
});

export const BenefitsBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px 0",
  gap: 30,
  "@media (max-width: 800px)": {
    maxWidth: "700px",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  width: "100%",
  "@media (max-width: 800px)": {
    maxWidth: "100% !important",
    textAlign: "center",
  },
});
