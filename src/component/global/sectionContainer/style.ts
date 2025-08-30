"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const SectionContainer = styled(Box)({
  //   border: "1px solid red",
  backgroundPosition: "top center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "inherit",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 4%",
  "@media (max-width: 800px)": {
    padding: "0 4%",
  },
  "@media (max-width: 600px)": {
    padding: "0 4%",
  },
});

export const SectionContentWrapper = styled(Box)({
  // border: "1px solid gold",
  width: "100%",
  maxWidth: "1200px",
  height: "fit-content",
  minHeight: "200px",
});
