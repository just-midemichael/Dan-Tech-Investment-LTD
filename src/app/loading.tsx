"use client";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import { Box } from "@mui/material";
import { Circles } from "react-loader-spinner";
import Image from "next/image";
import mainLogo from "../../public/di-main-logo.png";

export default function Loading() {
  return (
    <Section style={{ zIndex: 1 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Image
          src={mainLogo}
          alt="Loading..."
          width={260}
          height={70}
          style={{ marginBottom: "20px" }}
        />
        <Circles
          height="60"
          width="60"
          color={appStyle.paragraphColor}
          ariaLabel="loading"
        />
      </Box>
    </Section>
  );
}
