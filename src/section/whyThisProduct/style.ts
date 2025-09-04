"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";

export const HeroContentWraper = styled(Box)({
  // border: "2px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-Start",
  alignItems: "flex-start",
  padding: "80px 0",
  gap: 50,
  "@media (max-width: 800px)": {
    minHeight: "fit-content",
    flexDirection: "column",
    padding: "40px 0",
    gap: 30,
  },
});

export const TextFocalBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "560px",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 30,
  "@media (max-width: 1000px)": {
    maxWidth: "600px",
    gap: 20,
  },
  "@media (max-width: 800px)": {
    maxWidth: "700px",
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
  },
});

export const ImageFocalBox = styled(Box)({
  // border: "1px solid green",
  width: "100%",
  maxWidth: "500px",
  height: "100%",
  maxHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  "@media (max-width: 800px)": {
    height: "400px",
    maxWidth: "100%",
  },
  "@media (max-width: 400px)": {
    height: "300px",
    maxWidth: "100%",
  },
});

export const ProductImage = styled(image)({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});
