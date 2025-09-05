"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { appStyle } from "@/db/appStyle";

export const BenefitCardWrapper = styled(Box)({
  border: "0.5px solid #eaeaead8",
  width: "100%",
  maxWidth: "400px",
  height: "fit-content",
  minHeight: "310px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 10,
  padding: 24,
  borderRadius: 10,
  boxShadow: "5px 5px 10px 0px #eaeaead8",
  "@media (max-width: 800px)": {
    maxWidth: "600px",
  },
});

export const IconBox = styled(Box)({
  //   border: "1px solid green",
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0 10px",
});

export const Icon = styled(IconButton)({
  //   border: "1px solid teal",
  width: "50px",
  height: "50px",
  overflow: "hidden",
  background: appStyle.buttonIconBackgroundColor,
});

export const TextBox = styled(Box)({
  //   border: "1px solid green",
  width: "100%",
  height: "130px",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
});

export const BenefitTitleBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "100%",
  maxHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "5px 10px",
});

export const BenefitDescriptionBox = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 10,
});
