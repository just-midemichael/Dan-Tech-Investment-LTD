import { Section } from "@/component/global/sectionContainer/sectionContainer";
import React from "react";
import { HeroContentWraper, Span, TextFocalBox } from "./style";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { HeaderTitle1, HeroTitle } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { ActionButton } from "@/component/global/button/button";

type GlobalHeroSectionProps = {
  pageTitle: string;
  buzzText: string;
  buzzTextColor: string;
  pageDescription?: string;
  backgroundImage?: string;
  buttonBackground?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ProductHeroSection = ({
  pageTitle,
  buzzText,
  buzzTextColor,
  pageDescription,
  backgroundImage,
  buttonBackground,
  onClick,
}: GlobalHeroSectionProps) => {
  return (
    <Section
      style={{
        marginTop: "100px",
      }}
      bgImage={backgroundImage}
    >
      <HeroContentWraper>
        <TextFocalBox>
          <HeaderTitle1
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
              width: "100%",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            <Span>{pageTitle}</Span>
          </HeaderTitle1>
          <HeroTitle
            style={{
              background: buzzTextColor,
              color: "transparent",
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
              width: "100%",
              textAlign: "center",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            <Span>{buzzText}</Span>
          </HeroTitle>
          <Paragraph1
            style={{
              color: `${appStyle.paragraphColor}`,
              textAlign: "center",
              maxWidth: "650px",
            }}
          >
            <Span>{pageDescription}</Span>
          </Paragraph1>
          <ActionButton
            text={"Invest Now"}
            id={"invest-in-agricuture"}
            ariaLabel={"invest-in-agricuture"}
            onClick={onClick}
            style={{
              background: buttonBackground,
              color: appStyle.headerTitleColor,
              minWidth: "250px",
            }}
          />
        </TextFocalBox>
      </HeroContentWraper>
    </Section>
  );
};
