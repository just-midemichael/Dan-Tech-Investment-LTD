"use client";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import React from "react";
import { ButtonBox, ContentWrapper, StepsWrapper } from "./style";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { StepsComponent } from "@/component/local/step/steps";
import { howToInvest } from "@/db/howToInvest";
import { ActionButton } from "@/component/global/button/button";
import { useRouter } from "next/navigation";

export const HowToInvestSection = () => {
  const router = useRouter();
  return (
    <Section
      // bg={`${appStyle.headerTitleColor}`}
      bgImage={`linear-gradient(to bottom, #182f58ee, #182f58e6), url("/lagos.jpg")`}
      bgColor={`${appStyle.headerTitleColor}`}
      style={{
        maxWidth: `${appStyle.appContentmaxWidth}`,
        fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
      }}
    >
      <ContentWrapper>
        <HeaderTitle1
          style={{
            color: "#ffffff",
            maxWidth: "500px",
            fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
          }}
        >
          How to start investing with Dan-Tech
        </HeaderTitle1>
        <Paragraph1 style={{ color: "#ffffffff", maxWidth: "580px" }}>
          This is Good Paragraph
        </Paragraph1>
        <StepsWrapper>
          {howToInvest.map((data) => (
            <StepsComponent
              key={data.id}
              sortNumber={data.sortNumber}
              title={data.title}
              description={data.description}
            />
          ))}
        </StepsWrapper>
        <ButtonBox>
          <ActionButton
            text={"Invest Now"}
            type="button"
            style={{
              background: `${appStyle.cardDefaultBackgroundColor}`,
              color: "#ffffff",
            }}
            onClick={() => router.push("/invest")}
            id={"howToButton"}
            ariaLabel={"howToButton"}
          />
        </ButtonBox>
      </ContentWrapper>
    </Section>
  );
};
