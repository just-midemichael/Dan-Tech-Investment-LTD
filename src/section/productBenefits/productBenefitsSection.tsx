import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { BenefitsBox, BenefitsContentWrapper } from "./style";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { ProductBenefitsCard } from "@/component/local/productBenefitsCard/productBenefitsCard";
import { ProductBenefitsProps } from "@/db/productBenefits";
import React from "react";
import { ActionButton } from "@/component/global/button/button";

interface BenefitSectionProps {
  product: ProductBenefitsProps[];
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProductBenefitsSection = ({
  product,
  onClick,
}: BenefitSectionProps) => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <BenefitsContentWrapper>
        <HeaderTitle1
          style={{
            color: appStyle.headerTitleColor,
            fontWeight: appStyle.appGlobalTitleFontWeight,
          }}
        >
          Benefits of this product
        </HeaderTitle1>
        <BenefitsBox>
          {product.map((benefit) => (
            <ProductBenefitsCard
              key={benefit.id}
              icon={React.createElement(benefit.icon, {
                sx: { color: "#fff" },
                fontSize: "large",
              })}
              benefitTitle={benefit.title}
              benefitDescription={benefit.description}
            />
          ))}
        </BenefitsBox>
        <ActionButton
          text={"Invest Now"}
          id={"product-invest-now"}
          ariaLabel={"product-invest-now"}
          onClick={onClick}
          style={{ color: "#fff", minWidth: "200px" }}
        />
      </BenefitsContentWrapper>
    </Section>
  );
};
