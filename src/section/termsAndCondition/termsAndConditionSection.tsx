import React from "react";
import { TermsContentWrapper, SectionBox } from "./style";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { HeaderTitle5 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { PolicySection } from "@/db/privacy";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";
import { termsAndConditions } from "@/db/termsAndConditions";

export const TermsAndConditionsSection = () => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <TermsContentWrapper>
        {termsAndConditions.map((section: PolicySection, index: number) => (
          <SectionBox key={index}>
            <HeaderTitle5
              style={{
                color: appStyle.headerTitleColor,
                fontWeight: appStyle.appGlobalTitleFontWeight,
              }}
            >
              {section.title}
            </HeaderTitle5>
            <Paragraph2
              style={{
                color: appStyle.paragraphColor,
                fontWeight: 500,
              }}
            >
              {section.description}
            </Paragraph2>
          </SectionBox>
        ))}
      </TermsContentWrapper>
    </Section>
  );
};
