"use client";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import React, { useEffect, useState } from "react";
import { Iframe, IframeBox, WhyDanTechContentWrapper } from "./style";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";

export const WhyDanTechSection = () => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldPlay(true); // Start playing when the iframe is in view
          } else {
            setShouldPlay(false); // Stop when the iframe goes out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the iframe is in view
      }
    );

    const iframeElement = document.getElementById("videoIframe");
    if (iframeElement) {
      observer.observe(iframeElement);
    }

    return () => {
      if (iframeElement) {
        observer.unobserve(iframeElement);
      }
    };
  }, []);

  return (
    <Section
      bg={`${appStyle.appBackgroundColor}`}
      style={{ maxWidth: `${appStyle.appContentmaxWidth}` }}
    >
      <WhyDanTechContentWrapper>
        <HeaderTitle1
          style={{
            color: `${appStyle.headerTitleColor}`,
            fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
          }}
        >
          Why Choose Dan-Tech
        </HeaderTitle1>
        <IframeBox id="videoIframeBox">
          <Iframe
            id="videoIframe"
            name="videoIframe"
            src={
              shouldPlay
                ? "https://www.youtube.com/embed/TVwM6dVqaA8?autoplay=1&mute=1"
                : "https://www.youtube.com/embed/TVwM6dVqaA8?autoplay=0&mute=1"
            }
            allow="autoplay; fullscreen"
          />
        </IframeBox>
      </WhyDanTechContentWrapper>
    </Section>
  );
};
