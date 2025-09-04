import { Section } from "@/component/global/sectionContainer/sectionContainer";
import React from "react";
import {
  HeroContentWraper,
  ImageFocalBox,
  ProductImage,
  Span,
  TextFocalBox,
} from "./style";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { StaticImageData } from "next/image";

type GlobalHeroSectionProps = {
  product: string;
  description?: string;
  background: string;
  backgroundImage?: string;
  productImage: string | StaticImageData;
};

export const WhyThisProductSection = ({
  product,
  description,
  background,
  backgroundImage,
  productImage,
}: GlobalHeroSectionProps) => {
  return (
    <Section bg={background} bgImage={backgroundImage}>
      <HeroContentWraper>
        <TextFocalBox>
          <HeaderTitle1
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
              width: "100%",
            }}
          >
            <Span>Why this product</Span>
          </HeaderTitle1>
          <Paragraph1
            style={{
              color: `${appStyle.headerTitleColor}`,
            }}
          >
            <Span>{description}</Span>
          </Paragraph1>
        </TextFocalBox>
        <ImageFocalBox>
          <ProductImage src={productImage} alt={`${product} Image`} />
        </ImageFocalBox>
      </HeroContentWraper>
    </Section>
  );
};
