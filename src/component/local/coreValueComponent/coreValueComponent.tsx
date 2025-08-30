import React from "react";
import {
  CoreValueContentWrapper,
  CoreValueDescriptionContainer,
  CoreValueIcon,
  CoreValueIconBox,
  CoreValueTextBox,
  CoreValueTitleContainer,
  Span,
} from "./style";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";
import { appStyle } from "@/db/appStyle";
import { HeaderTitle6 } from "@/component/global/title/headerTitle";

type CoreValueProps = {
  valueTitle: string;
  valueDescription: string;
  Icon: React.ReactNode;
};

export const CoreValueComponent = ({
  valueTitle,
  valueDescription,
  Icon,
}: CoreValueProps) => {
  return (
    <CoreValueContentWrapper>
      <CoreValueIconBox
        style={{ background: `${appStyle.buttonIconBackgroundColor}` }}
      >
        <CoreValueIcon>{Icon}</CoreValueIcon>
      </CoreValueIconBox>
      <CoreValueTextBox>
        <CoreValueTitleContainer>
          <HeaderTitle6
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
            }}
          >
            {valueTitle}
          </HeaderTitle6>
        </CoreValueTitleContainer>
        <CoreValueDescriptionContainer>
          <Paragraph2 style={{ color: `${appStyle.paragraphColor}` }}>
            <Span>{valueDescription}</Span>
          </Paragraph2>
        </CoreValueDescriptionContainer>
      </CoreValueTextBox>
    </CoreValueContentWrapper>
  );
};
