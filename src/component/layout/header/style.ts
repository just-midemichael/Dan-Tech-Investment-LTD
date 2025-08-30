"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";

export const HeaderContainer = styled(Box)({
  // border: "2px solid black",
  zIndex: 20,
  width: "100%",
  height: "fit-content",
  position: "absolute",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 4%",
  "@media (max-width: 800px)": {
    padding: "10px 4%",
  },
  "@media (max-width: 600px)": {
    padding: "10px 4%",
  },
  //   backdropFilter: "blur(2px)",
  // backgroundColor: "#f6faffff",
});

export const HeaderContentWrapper = styled(Box)({
  // border: "1px solid navy",
  width: "100%",
  // maxWidth: "1200px", // or 1400px
  height: "100%",
  minHeight: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  "@media (max-width: 800px)": {
    minHeight: "76px",
  },
});

export const HeaderLogoBox = styled(Box)({
  //   border: "1px solid green",
  width: "fit-content",
  minWidth: "100px",
  height: "100%",
  minHeight: "40px",
  display: "flex",
});

export const HeaderNavBox = styled(Box)({
  //   border: "1px solid green",
  width: "fit-content",
  minWidth: "240px",
  height: "100%",
  minHeight: "40px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "30px",
  flexWrap: "wrap",
  "@media (max-width: 800px)": {
    display: "none",
  },
});

export const HeaderHamburgerBox = styled(Box)({
  // border: "1px solid green",
  width: "fit-content",
  minWidth: "50px",
  height: "100%",
  minHeight: "40px",
  display: "none",
  borderRadius: "50%",
  "@media (max-width: 800px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
});

export const HeaderLogo = styled(image)({
  width: "100%",
  height: "46px",
  cursor: "pointer",
  objectFit: "contain",
  "@media (max-width: 800px)": {
    height: "42px",
  },
});

export const Link = styled(Box)({
  fontSize: "1.0rem",
  fontWeight: 500,
  color: "#182F58",
  display: "flex",
  gap: "10px",
  cursor: "pointer",
});

export const MenuContainer = styled(Box)({
  // border: "1px solid teal",
  // borderBottom: "0.5px solid #3E71B1",
  zIndex: 19,
  position: "fixed",
  top: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(2px)",
  backgroundColor: "#FFFFFF",
  overflowY: "auto",
  padding: "100px 4% 10%",
  "@media (max-width: 800px)": {
    padding: "100px 4% 10%",
  },
  "@media (max-width: 600px)": {
    padding: "100px 4% 10%",
  },
  "@media (max-width: 400px)": {
    padding: "100px 2% 10%",
  },
});

export const MenuContentWrapper = styled(Box)({
  // border: "1px solid gold",
  width: "100%",
  height: "fit-content",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  paddingTop: "20%",
});
