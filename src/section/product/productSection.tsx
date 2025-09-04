import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import React from "react";
import { ProductBox, ProductContentWrapper, Span } from "./style";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";
import { ProductCard } from "@/component/local/productCard/productCard";
import { productList } from "@/db/products";

export const ProductSection = () => {
  return (
    <Section
      bg={`${appStyle.productBackgroundColor}`}
      style={{ maxWidth: `${appStyle.appContentmaxWidth}` }}
    >
      <ProductContentWrapper>
        <HeaderTitle1
          style={{
            color: `${appStyle.headerTitleColor}`,
            fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
          }}
        >
          <Span> Choose an Investment Product</Span>
        </HeaderTitle1>
        <Paragraph1
          style={{
            color: `${appStyle.paragraphColor}`,
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          It does not matter who you are or what resonates with you, We have got
          the perfect investment product for you.
        </Paragraph1>
        <ProductBox>
          {productList.map((data) => (
            <ProductCard
              key={data.id}
              prouctTitle={data.title}
              productDescription={data.description}
              productImage={data.image}
              productPageLink={data.link}
              productBackground={data.background}
              id={`${data.title}${data.id}`}
              ariaLabel={`${data.title}${data.id}`}
            />
          ))}
        </ProductBox>
      </ProductContentWrapper>
    </Section>
  );
};
