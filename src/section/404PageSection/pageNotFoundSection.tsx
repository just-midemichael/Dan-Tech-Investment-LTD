"use client";

import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Icon } from "@mui/material";
import { Paragraph3 } from "@/component/global/paragraph/paragraph";

export const PageNotFoundSection = () => {
  const initialValue = 20000;
  const [countdown, setCountdown] = useState(initialValue / 1000);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const redirectionId = setTimeout(() => {
      redirect("/");
    }, initialValue - 2000);

    const countDownId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectionId);
      clearInterval(countDownId);
    };
  }, []);

  return (
    <Section
      style={{
        maxWidth: "1200px",
        height: "100%",
        position: "relative",
        padding: "100px 0",
      }}
    >
      <DotLottieReact
        src="https://lottie.host/16fc5239-9c93-421d-9e72-ce593f194317/UfA5LkczsK.lottie"
        loop
        autoplay
      />
      {hasMounted && (
        <Paragraph3
          style={{
            display: countdown <= 0 ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            color: appStyle.paragraphColor,
            height: "fit-content",
            width: "100%",
          }}
        >
          Redirecting to home page in &nbsp;
          <Icon
            fontSize="small"
            style={{
              color: "#fff",
              borderRadius: "50%",
              background: appStyle.buttonIconBackgroundColor,
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {countdown}
          </Icon>
          &nbsp; {countdown === 1 ? "second..." : "seconds..."}
        </Paragraph3>
      )}
    </Section>
  );
};
