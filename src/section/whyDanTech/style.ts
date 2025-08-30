"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const WhyDanTechContentWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 50,
  padding: "100px 0",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "60px 0",
    gap: 40,
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: 30,
  },
});

export const IframeBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "800px",
  height: "fit-content",
  maxHeight: "480px",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Iframe = styled("iframe")({
  //   border: "1px solid black",
  width: "100%",
  height: "calc(100vh * 0.6)",
  frameBorder: 0,
  border: "none",
  borderRadius: "8px",
  "@media (max-width: 1000px)": {
    height: "calc(90vh * 0.6)",
  },
  "@media (max-width: 800px)": {
    height: "calc(80vh * 0.6)",
  },
  "@media (max-width: 600px)": {
    height: "calc(60vh * 0.6)",
  },
});
