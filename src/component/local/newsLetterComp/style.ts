"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const NewsLetterComponentWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "1000px",
  height: "fit-content",
  minHeight: "280px",
  borderRadius: "8px",
  padding: "50px",
  display: "flex",
  gap: 20,
  boxShadow: "5px 5px 10px 0px #eaeaead8",
  "@media (max-width: 1000px)": {
    flexDirection: "column",
    maxWidth: "700px",
  },
  "@media (max-width: 800px)": {
    padding: "40px",
  },
  "@media (max-width: 600px)": {
    padding: "30px",
  },
});

export const TextContainer = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "380px",
  height: "200px",
  maxHeight: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
  "@media (max-width: 1000px)": {
    height: "fit-content",
    maxWidth: "700px",
  },
});

export const TitleBox = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  maxWidth: "340px",
  height: "100%",
  maxHeight: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const DescriptionBox = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  height: "100%",
  minHeight: "40px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

export const FormContainer = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  height: "200px",
  minHeight: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "@media (max-width: 1000px)": {
    height: "fit-content",
    maxWidth: "700px",
  },
});
