"use client";
import { styled } from "@mui/material/styles";

import { Button } from "@mui/material";

export const ButtonComponent = styled(Button)({
  width: "fit-content",
  minWidth: "150px",
  height: "fit-content",
  minHeight: "54px",
  color: "#80b1edff",
  display: "flex",
  padding: "10px 20px",
  borderRadius: "6px",
  gap: 4,
  background:
    "linear-gradient(90deg,rgba(62, 113, 177, 1) 0%, rgba(24, 47, 88, 1) 50%)",
  "@media (max-width: 1000px)": {
    textAlign: "center !important",
    alignSelf: "center",
  },
  "@media (max-width: 800px)": {
    minHeight: "50px",
  },
  "@media (max-width: 600px)": {
    minHeight: "48px",
  },
});
