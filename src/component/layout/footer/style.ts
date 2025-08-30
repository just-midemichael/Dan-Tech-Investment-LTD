"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";
import { Icon } from "@mui/material";

export const FooterContainer = styled(Box)({
  width: "100%",
  height: "fit-content",
  background: "linear-gradient(to bottom, #182f58 80%, black 100%)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px 4%",
  "@media (max-width: 800px)": {
    padding: "58px 4%",
  },
  "@media (max-width: 600px)": {
    padding: "56px 4%",
  },
});

export const FooterContentWrapper = styled(Box)({
  // border: "1px solid gold",
  overflow: "hidden",
  width: "100%",
  // maxWidth: "1200px", // or "1440px"
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  "@media (max-width: 800px)": {
    gap: "38px",
  },
  "@media (max-width: 600px)": {
    gap: "36px",
  },
  "@media (max-width: 400px)": {
    gap: "34px",
  },
});

export const Box1 = styled(Box)({
  // border: "1px solid green",
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
  },
  "@media (max-width: 600px)": {
    gap: "16px",
  },
  "@media (max-width: 400px)": {
    gap: "14px",
  },
});

export const Box2 = styled(Box)({
  // border: "1px solid green",
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "20px",
});

export const Box3 = styled(Box)({
  borderTop: "0.5px solid white",
  width: "100%",
  height: "fit-content",
  minHeight: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
});

export const LogoSocialContainer = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: "6px",
  padding: "10px 0",
});

export const LogoBox = styled(Box)({
  // border: "1px solid gold",
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const Logo = styled(image)({
  // border: "1px solid white",
  width: "fit-content",
  height: "100%",
  objectFit: "contain",
});

export const SocialMediaBox = styled(Box)({
  // border: "1px solid gold",
  width: "100%",
  height: "fit-content",
  minHeight: "60px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
});

export const SocialMediaIcon = styled(Icon)({
  // border: "1px solid white",
  borderRadius: "100%",
  background: "#fff",
  color: "#182f58",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  objectFit: "contain",
  cursor: "pointer",
  "&:hover": {},
});

export const LinksWrapper = styled(Box)({
  // border: "1px solid red",
  width: "100%",
  minWidth: "300px",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
  padding: "10px 0",
  "@media (max-width: 800px)": {
    gap: "18px",
    minWidth: "100%",
  },
  "@media (max-width: 600px)": {
    gap: "16px",
  },
  "@media (max-width: 400px)": {
    gap: "14px",
  },
});
export const CompanyLinkContainer = styled(Box)({
  // border: "1px solid teal",
  width: "100%",
  maxWidth: "220px",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "20px",
});

export const LegalLinkContainer = styled(Box)({
  // border: "1px solid teal",
  width: "100%",
  maxWidth: "220px",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "20px",
});

export const LinksBox = styled(Box)({
  // border: "1px solid blue",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "14px",
});

export const Link = styled(Box)({
  fontSize: "0.90rem",
  fontWeight: 400,
  color: "#e9e8e8ff",
  display: "flex",
  gap: "10px",
  cursor: "pointer",
});

export const EmailPhoneLink = styled("a")({
  fontSize: "0.90rem",
  fontWeight: 400,
  color: "#e9e8e8ff",
  display: "flex",
  gap: "10px",
});

export const ContactBox = styled(Box)({
  // border: "1px solid orange",
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
    gap: "30px",
  },
});

export const EmailPhoneBox = styled(Box)({
  // border: "1px solid purple",
  width: "100%",
  maxWidth: "500px",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "14px",
  "@media (max-width: 800px)": {
    maxWidth: "100%",
  },
});

export const AddressBox = styled(Box)({
  // border: "1px solid purple",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "14px",
});

export const CopyrightBox = styled(Box)({
  // border: "1px solid purple",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "0.85rem",
  fontWeight: 300,
  color: "#e9e8e8ff",
});

export const CopyrightText = styled("span")({
  fontSize: "0.85rem",
  fontWeight: 300,
  color: "#e9e8e8ff",
});
