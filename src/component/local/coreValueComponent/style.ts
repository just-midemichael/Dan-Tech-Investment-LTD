"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";

export const CoreValueContentWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "600px",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});

export const CoreValueIconBox = styled(Box)({
  //   border: "1px solid green",
  width: "100%",
  maxWidth: "100px",
  height: "100%",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  padding: "10px",
});

export const CoreValueIcon = styled(Icon)({
  //   border: "1px solid red",
  width: "50px",
  height: "50px",
  color: "#ffffff",
  backgroundColor: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "small",
});

export const CoreValueTextBox = styled(Box)({
  //   border: "1px solid green",
  width: "100%",
  maxWidth: "100%",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  overflow: "hidden",
});

export const CoreValueTitleContainer = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  height: "100%",
  maxHeight: "24%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  overflow: "hidden",
});

export const CoreValueDescriptionContainer = styled(Box)({
  //   border: "1px solid gold",
  width: "100%",
  height: "100%",
  maxHeight: "74%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  overflow: "hidden",
});

export const Span = styled("span")({
  // border: "2px solid red",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  lineHeight: "inherit",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
});
