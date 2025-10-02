import { Section } from "@/component/global/sectionContainer/sectionContainer";
import React from "react";
import {
  HeroContentWraper,
  ImageFocalBox,
  List,
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
  description?: string[] | string;
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
          {Array.isArray(description) ? (
            description?.map((list, index) => (
              <Paragraph1
                key={index}
                style={{
                  color: `${appStyle.headerTitleColor}`,
                }}
              >
                <ul className="check-list">
                  <List>{list}</List>
                </ul>
              </Paragraph1>
            ))
          ) : (
            <Paragraph1 style={{ color: appStyle.headerTitleColor }}>
              <Span className="check-list">{description}</Span>
            </Paragraph1>
          )}
        </TextFocalBox>
        <ImageFocalBox>
          <ProductImage src={productImage} alt={`${product} Image`} />
        </ImageFocalBox>
      </HeroContentWraper>
    </Section>
  );
};
