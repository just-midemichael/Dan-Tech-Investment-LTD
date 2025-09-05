import React from "react";
import {
  BenefitCardWrapper,
  BenefitDescriptionBox,
  BenefitTitleBox,
  Icon,
  IconBox,
  TextBox,
} from "./style";
import { HeaderTitle6 } from "@/component/global/title/headerTitle";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";
import { appStyle } from "@/db/appStyle";

type BenefitCardProps = {
  icon: React.ReactNode;
  benefitTitle: string;
  benefitDescription: string;
};

export const ProductBenefitsCard = ({
  icon,
  benefitTitle,
  benefitDescription,
}: BenefitCardProps) => {
  return (
    <BenefitCardWrapper>
      <IconBox>
        <Icon>{icon}</Icon>
      </IconBox>
      <TextBox>
        <BenefitTitleBox>
          <HeaderTitle6
            style={{
              color: appStyle.headerTitleColor,
              fontWeight: appStyle.appGlobalTitleFontWeight,
            }}
          >
            {benefitTitle}
          </HeaderTitle6>
        </BenefitTitleBox>
        <BenefitDescriptionBox>
          <Paragraph2 style={{ color: appStyle.paragraphColor }}>
            {benefitDescription}
          </Paragraph2>
        </BenefitDescriptionBox>
      </TextBox>
    </BenefitCardWrapper>
  );
};
