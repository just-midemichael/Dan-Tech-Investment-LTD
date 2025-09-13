"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import image from "next/image";

export const ProductCardWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "100%",
  height: "460px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  padding: "30px 60px",
  borderRadius: 10,
  boxShadow: "5px 5px 10px 0px #eaeaead8",
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "30px 20px",
    maxWidth: "640px",
    height: "500px",
    maxHeight: "fit-content",
    gap: 10,
  },
});

export const TextFocalBox = styled(Box)({
  // border: "1px solid green",
  width: "100%",
  maxWidth: "600px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  padding: "40px 0",
  gap: 20,
  "@media (max-width: 800px)": {
    gap: 10,
    padding: "0",
  },
});

export const ProductHeaderBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  maxHeight: "60px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  "@media (max-width: 800px)": {
    maxHeight: "50px",
  },
});

export const ProductBriefBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 10,
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  overflow: "hidden",
  maxWidth: "500px",
});

export const ProductButtonBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  maxHeight: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  "@media (max-width: 800px)": {
    maxHeight: "4ay0px",
  },
});

export const ExploreButton = styled(Button)({
  // border: "1px solid red",
  width: "fit-content",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "20px 20px 20px 0",
  textTransform: "capitalize",
});

export const ImageFocalBox = styled(Box)({
  // border: "1px solid green",
  width: "100%",
  maxWidth: "360px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  "@media (max-width: 800px)": {
    height: "200px",
  },
});

export const ProductImage = styled(image)({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  "@media (max-width: 800px)": {
    height: "250px",
  },
});
