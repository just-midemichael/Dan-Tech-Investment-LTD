"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

export const MissionContentWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 30,
  padding: "80px 0 50px",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "40px 0 20px",
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

export const GalleryBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "900px",
  height: "fit-content",
  padding: "30px 0 0",
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

export const GalleryList = styled(ImageList)({
  // border: "1px solid red",
  width: "100%",
  height: "fit-content",
});

export const PictureItem = styled(ImageListItem)({
  // border: "1px solid gold",
  width: "100%",
});

export const Pics = styled(Image)({
  width: "100%",
  height: "fit-content",
  maxHeight: "420px",
  objectFit: "cover",
  borderRadius: 8,
});
