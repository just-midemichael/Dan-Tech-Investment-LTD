"use client";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { HeroTitle } from "@/component/global/title/headerTitle";
import {
  HeroContentWraper,
  ImageFocalBox,
  Image,
  ImageWrapper,
  TextFocalBox,
  Span,
  InvestButton,
} from "./style";

import heroImage from "../../../public/hero-image.png";
import { useRouter } from "next/navigation";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { focalText } from "../../db/heroSection";
import { appStyle } from "@/db/appStyle";

export const HomeHeroSection = () => {
  const router = useRouter();

  return (
    <Section
      style={{
        marginTop: "100px",
      }}
    >
      <HeroContentWraper>
        <TextFocalBox>
          <HeroTitle
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
            }}
          >
            <Span>{focalText.bigText}</Span>
          </HeroTitle>
          <Paragraph1 style={{ color: `${appStyle.paragraphColor}` }}>
            <Span>{focalText.smallText}</Span>
          </Paragraph1>
          <InvestButton
            id="investButton"
            aria-label="investButton"
            onClick={() => router.push("/invest")}
          >
            <Paragraph1
              style={{
                color: "white",
                textTransform: "capitalize",
                fontWeight: 400,
              }}
            >
              {focalText.actionButtonText}
            </Paragraph1>
            <TrendingUpIcon fontSize="large" />
          </InvestButton>
        </TextFocalBox>
        <ImageFocalBox>
          <ImageWrapper>
            <Image src={heroImage} alt="Hero Image" />
          </ImageWrapper>
        </ImageFocalBox>
      </HeroContentWraper>
    </Section>
  );
};
