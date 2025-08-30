"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const P1 = styled(Box)({
  fontSize: "1.12rem",
  fontWeight: 500,
  lineHeight: "1.5",
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "1.15rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "1.05rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.00rem",
  },
});
export const P2 = styled(Box)({
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: "1.5",
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "0.95rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "0.925rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "0.90rem",
  },
});
export const P3 = styled(Box)({
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: "1.5",
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "0.865rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "0.855rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "0.845rem",
  },
});
