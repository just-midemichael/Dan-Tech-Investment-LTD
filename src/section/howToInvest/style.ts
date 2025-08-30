"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContentWrapper = styled(Box)({
  // border: "1px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "700px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "100px 0 40px",
  gap: 20,
  "@media (max-width: 1000px)": {
    minHeight: "fit-content",
  },
  "@media (max-width: 800px)": {
    padding: "60px 0",
  },
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
});

export const StepsWrapper = styled(Box)({
  // border: "2px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  gap: 20,
  padding: "40px 0",
  "@media (max-width: 1000px)": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "fit-content",
    flexDirection: "column",
    gap: 20,
  },
  "@media (max-width: 800px)": {
    gap: 16,
  },
});

export const ButtonBox = styled(Box)({
  // border: "2px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 1000px)": {
    // justifyContent: "flex-start",
    minHeight: "fit-content",
  },
});
