import React from "react";
import { CookiePolicyContentWrapper, SectionBox } from "./style";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { HeaderTitle5 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { PolicySection } from "@/db/privacy";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";
import { cookiePolicy } from "@/db/cookiePolicy";

export const CookiePolicySection = () => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <CookiePolicyContentWrapper>
        {cookiePolicy.map((section: PolicySection, index: number) => (
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
      </CookiePolicyContentWrapper>
    </Section>
  );
};
