import React from "react";
import { List, PrivacyContentWrapper, SectionBox, Ul } from "./style";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { HeaderTitle5 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { PolicySection, privacyPolicy } from "@/db/privacy";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";

export const PrivacyPolicySection = () => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <PrivacyContentWrapper>
        {privacyPolicy.map((section: PolicySection, index: number) => (
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
            {Array.isArray(section.content) && (
              <Ul>
                {section.content.map((item, idx) => {
                  if (typeof item === "string") {
                    return (
                      <ul key={idx} className="regular-check-list">
                        <List>
                          <Paragraph2
                            style={{
                              color: appStyle.paragraphColor,
                              fontWeight: 500,
                            }}
                          >
                            {item}
                          </Paragraph2>
                        </List>
                      </ul>
                    );
                  } else {
                    return (
                      <ul key={idx} className="regular-check-list">
                        {" "}
                        <List key={idx}>
                          <Paragraph2
                            style={{
                              color: appStyle.paragraphColor,
                              fontWeight: 500,
                            }}
                          >
                            {item.item}&nbsp;
                            {item.description}
                          </Paragraph2>
                        </List>
                      </ul>
                    );
                  }
                })}
              </Ul>
            )}
          </SectionBox>
        ))}
      </PrivacyContentWrapper>
    </Section>
  );
};
