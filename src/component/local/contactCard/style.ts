"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";
import { appStyle } from "@/db/appStyle";
import { Icon } from "@mui/material";

export const ContactCardWrapper = styled(Box)({
  //   border: "1px solid red",
  width: "100%",
  maxWidth: "100%",
  height: "460px",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: 40,
  padding: "60px",
  borderRadius: 10,
  boxShadow: "5px 5px 10px 0px #eaeaead8",
  "@media (max-width: 800px)": {
    flexDirection: "column",
    padding: "40px 30px",
    maxWidth: "640px",
    gap: 20,
  },
});

export const BoxOne = styled(Box)({
  //   border: "1px solid gold",
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 30,
  "@media (max-width: 800px)": {
    flexDirection: "column",
    minHeight: "fit-content",
  },
});

export const ImageContainer = styled(Box)({
  //   border: "1px solid black",
  width: "110px",
  maxWidth: "110px",
  height: "110px",
  minHeight: "110px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "100%",
  "@media (max-width: 800px)": {
    width: "80px",
    maxWidth: "80px",
    height: "80px",
    minHeight: "80px",
  },
});

export const Image = styled(image)({
  //   border: "1px solid red",
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const OfficeAddressContainer = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  maxWidth: "470px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  "@media (max-width: 800px)": {
    maxWidth: "520px",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export const OfficeAddressLink = styled(Box)({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: appStyle.headerTitleColor,
  display: "flex",
  gap: "10px",
  cursor: "pointer",
  textAlign: "right",
  "@media (max-width: 800px)": {
    textAlign: "left",
  },
});

export const BoxTwo = styled(Box)({
  //   border: "1px solid gold",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  "@media (max-width: 800px)": {
    flexDirection: "column",
    minHeight: "fit-content",
  },
});

export const EmailAddressContainer = styled(Box)({
  //   border: "1px solid teal",
  //   borderLeft: `0.5px solid ${appStyle.paragraphColor}`,
  width: "100%",
  minWidth: "30%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 10,
  padding: "10px 30px",
  "@media (max-width: 800px)": {
    padding: "10px",
    border: "none",
  },
});

export const PhoneContainer = styled(Box)({
  //   border: "1px solid teal",
  borderLeft: `0.5px solid ${appStyle.paragraphColor}`,
  width: "100%",
  minWidth: "30%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 10,
  padding: "10px 30px",
  "@media (max-width: 800px)": {
    padding: "10px",
    border: "none",
  },
});

export const EmailPhoneLink = styled("a")({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: appStyle.headerTitleColor,
  display: "flex",
  gap: "10px",
  cursor: "pointer",
  textAlign: "left",
  wordBreak: "break-word",
});

export const SocialMediaContainer = styled(Box)({
  //   border: "1px solid teal",
  borderLeft: `0.5px solid ${appStyle.paragraphColor}`,
  width: "100%",
  minWidth: "30%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: 10,
  wordWrap: "break-word",
  padding: "10px 30px",
  "@media (max-width: 800px)": {
    padding: "10px",
    border: "none",
  },
});

export const SocialMediaIcon = styled(Icon)({
  //   border: "1px solid white",
  borderRadius: "100%",
  background: "#fff",
  color: "#182f58",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30px",
  height: "30px",
  objectFit: "contain",
  cursor: "pointer",
  "&:hover": {},
});

export const Link = styled(Box)({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: appStyle.headerTitleColor,
  display: "flex",
  gap: "10px",
  cursor: "pointer",
  textAlign: "left",
  wordBreak: "break-word",
});
