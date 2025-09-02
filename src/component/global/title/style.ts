"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const H = styled(Box)({
  fontSize: "3.4rem",
  display: "flex",
  fontWeight: 600,
  "@media (max-width: 1000px)": {
    fontSize: "3.0rem",
  },
  "@media (max-width: 800px)": {
    fontSize: "2.8rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "2.6rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "2.4rem",
  },
});

export const H1 = styled(Box)({
  fontSize: "2.5rem",
  display: "flex",
  fontWeight: 700,
  "@media (max-width: 800px)": {
    fontSize: "2.2.5rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "2.0rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.75rem",
  },
});
export const H2 = styled(Box)({
  fontSize: "2.25rem",
  fontWeight: 700,
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "2.00rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "1.75rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.50rem",
  },
});
export const H3 = styled(Box)({
  fontSize: "2.0rem",
  fontWeight: 700,
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "1.75rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "1.50rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.25rem",
  },
});
export const H4 = styled(Box)({
  fontSize: "1.75rem",
  fontWeight: 700,
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "1.50rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "1.25rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1.0rem",
  },
});
export const H5 = styled(Box)({
  fontSize: "1.50rem",
  fontWeight: 700,
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "1.25rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "1.00rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "0.95rem",
  },
});
export const H6 = styled(Box)({
  fontSize: "1.25rem",
  fontWeight: 700,
  display: "flex",
  "@media (max-width: 800px)": {
    fontSize: "1.00rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "0.95rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "0.85rem",
  },
});
