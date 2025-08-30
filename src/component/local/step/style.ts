"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StepsContentContainer = styled(Box)({
  // border: "1px solid gold",
  width: "100%",
  maxWidth: "600px",
  height: "fit-content",
  minHeight: "200px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 15,
  "@media (max-width: 1000px)": {
    maxWidth: "700px",
  },
  "@media (max-width: 800px)": {
    minHeight: "190px",
  },
});

export const SortNumberBox = styled(Box)({
  // border: "1px solid white",
  borderLeft: "0.5px dotted #80b1edff",
  width: "fit-content",
  minWidth: "260px",
  height: "190px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  fontSize: "12rem",
  overflow: "hidden",
  WebkitTextStroke: "2px #80b1edff",
  WebkitTextFillColor: "transparent",
  padding: "0 10px 0 20px",
  "@media (max-width: 800px)": {
    fontSize: "5.0rem",
    minWidth: "116px",
    height: "84px",
    justifyContent: "flex-end",
    padding: "0",
  },
});

export const StepBox = styled(Box)({
  //   border: "1px solid white",
  width: "100%",
  height: "190px",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: 8,
  "@media (max-width: 800px)": {
    height: "160px",
  },
});

export const StepTitle = styled(Box)({
  //   border: "1px solid gold",
  width: "100%",
  height: "100%",
  maxHeight: "30px",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "#ffff",
});

export const StepDescription = styled(Box)({
  //   border: "1px solid gold",
  width: "100%",
  height: "100%",
  minHeight: "fit-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  color: "#80b1edff",
});
