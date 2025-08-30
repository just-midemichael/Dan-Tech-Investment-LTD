import { Section } from "@/component/global/sectionContainer/sectionContainer";
import React from "react";
import {
  HeroContentWraper,
  ImageFocalBox,
  ImageWrapper,
  Image,
  Span,
  TextFocalBox,
} from "./style";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { HeroTitle } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type GlobalHeroSectionProps = {
  pageTitle: string;
  pageDescription?: string;
  pageImage: string | StaticImport;
  backgroundImage?: string;
  imageDisplay: boolean;
};

export const GlobalHeroSection = ({
  pageTitle,
  pageDescription,
  pageImage,
  backgroundImage,
  imageDisplay,
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
          <HeroTitle
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
              width: "100%",
              maxWidth: "460px",
            }}
          >
            <Span>{pageTitle}</Span>
          </HeroTitle>
          <Paragraph1 style={{ color: `${appStyle.paragraphColor}` }}>
            <Span>{pageDescription}</Span>
          </Paragraph1>
        </TextFocalBox>
        {imageDisplay && (
          <ImageFocalBox>
            <ImageWrapper>
              <Image src={pageImage} alt={`${pageTitle} Hero Image`} />
            </ImageWrapper>
          </ImageFocalBox>
        )}
      </HeroContentWraper>
    </Section>
  );
};
