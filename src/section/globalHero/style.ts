"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";

export const HeroContentWraper = styled(Box)({
  //   border: "2px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 20,
  "@media (max-width: 1000px)": {
    maxWidth: "600px",
  },
  "@media (max-width: 800px)": {
    maxWidth: "540px",
  },
});

export const Span = styled("span")({
  //   border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  width: "100%",
  "@media (max-width: 1000px)": {
    textAlign: "center !important",
  },
});

export const ImageFocalBox = styled(Box)({
  //   border: "1px solid red",
  position: "relative",
  width: "100%",
  maxWidth: "fit-content",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 1000px)": {
    display: "none",
  },
});

export const ImageWrapper = styled(Box)({
  //   border: "1px solid black",
  position: "relative",
  width: "360px",
  height: "360px",
  borderRadius: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  background: "#80b1edff",
});

export const Image = styled(image)({
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  objectFit: "contain",
});
