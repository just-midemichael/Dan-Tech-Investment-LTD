"use client";

import React from "react";
import {
  ExploreButton,
  ImageFocalBox,
  ProductBriefBox,
  ProductButtonBox,
  ProductCardWrapper,
  ProductHeaderBox,
  ProductImage,
  Span,
  TextFocalBox,
} from "./style";
import { HeaderTitle3 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { Paragraph1, Paragraph2 } from "@/component/global/paragraph/paragraph";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  productBackground?: string;
  id: string;
  ariaLabel: string;
  prouctTitle: string;
  productDescription: string;
  productImage: string | StaticImageData;
  productPageLink?: string;
};

export const ProductCard = ({
  productBackground,
  id,
  ariaLabel,
  prouctTitle,
  productDescription,
  productImage,
  productPageLink,
}: ProductCardProps) => {
  const router = useRouter();
  return (
    <ProductCardWrapper style={{ background: `${productBackground}` }}>
      <TextFocalBox>
        <ProductHeaderBox>
          <HeaderTitle3
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
            }}
          >
            {prouctTitle}
          </HeaderTitle3>
        </ProductHeaderBox>
        <ProductBriefBox>
          <Paragraph2
            style={{
              color: `${appStyle.headerTitleColor}`,
            }}
          >
            <Span>{productDescription}</Span>
          </Paragraph2>
        </ProductBriefBox>
        <ProductButtonBox>
          <ExploreButton
            id={id}
            aria-label={ariaLabel}
            title="Read more"
            onClick={() => router.push(`${productPageLink}`)}
          >
            <Paragraph1 style={{ color: `${appStyle.headerTitleColor}` }}>
              <SubdirectoryArrowRightIcon />
              Explore
            </Paragraph1>
          </ExploreButton>
        </ProductButtonBox>
      </TextFocalBox>
      <ImageFocalBox>
        <ProductImage src={productImage} alt={`${prouctTitle} Image`} />
      </ImageFocalBox>
    </ProductCardWrapper>
  );
};
