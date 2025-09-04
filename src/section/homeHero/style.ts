"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";
import { Button } from "@mui/material";
import { keyframes } from "@mui/system";

export const HeroContentWraper = styled(Box)({
  // border: "2px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "80px 0",
  gap: 50,
  "@media (max-width: 1000px)": {
    minHeight: "fit-content",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
});

export const TextFocalBox = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 30,
  "@media (max-width: 1000px)": {
    maxWidth: "600px",
  },
  "@media (max-width: 800px)": {
    maxWidth: "540px",
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

export const InvestButton = styled(Button)({
  width: "fit-content",
  minWidth: "200px",
  height: "fit-content",
  minHeight: "60px",
  color: "#80b1edff",
  display: "flex",
  padding: "10px 20px",
  borderRadius: "30px",
  gap: 4,
  background:
    "linear-gradient(90deg,rgba(62, 113, 177, 1) 0%, rgba(24, 47, 88, 1) 50%)",
  "@media (max-width: 1000px)": {
    textAlign: "center !important",
    alignSelf: "center",
  },
  "@media (max-width: 800px)": {
    minHeight: "56px",
  },
  "@media (max-width: 600px)": {
    minHeight: "52px",
  },
});

export const ImageFocalBox = styled(Box)({
  // border: "1px solid red",
  position: "relative",
  width: "100%",
  height: "fit-content",
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const bgAnim = keyframes`
  0% {transform: translateY(0%);}
  33% {transform: translateY(-2.5%);}
  66% {transform: translateY(2.5%);}
  100% {transform: translateY(0%);}
`;

export const ImageWrapper = styled(Box)({
  // border: "1px solid black",
  position: "relative",
  width: "520px",
  height: "520px",
  borderRadius: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "1px 1px 6px 0px #2f2e2e17",
  background: `linear-gradient(to bottom, #80b1ede7, #80b1edff), url("/global-hero-bg.png")`,
  animation: `${bgAnim} 6.0s linear infinite`,
  "@media (max-width: 1000px)": {
    width: "480px",
    height: "480px",
  },
  "@media (max-width: 800px)": {
    width: "420px",
    height: "420px",
  },
  "@media (max-width: 600px)": {
    width: "360px",
    height: "360px",
  },
  "@media (max-width: 400px)": {
    width: "320px",
    height: "320px",
  },
});

export const Image = styled(image)({
  // border: "1px solid red",
  width: "90%",
  height: "130%",
});
