"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { appStyle } from "@/db/appStyle";

export const CookiePolicyContentWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 20,
  padding: "20px 0 80px",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "20px 0 60px",
  },
});

export const SectionBox = styled("section")({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "1000px",
  height: "fit-content",
});

export const Ul = styled("ul")({
  fontWeight: 500,
  paddingLeft: 20,
  color: appStyle.paragraphColor,
  fontSize: "inherit",
});

export const List = styled("li")({
  fontWeight: "inherit",
  color: appStyle.paragraphColor,
  fontSize: "inherit",
});
