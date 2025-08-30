import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import React from "react";
import { NewsLetterContentWrapper } from "./style";
import { NewsLetterComponent } from "@/component/local/newsLetterComp/newsLetterComponent";

export const NewsLetter = () => {
  return (
    <Section
      bgColor={`${appStyle.appBackgroundColor}`}
      style={{ maxWidth: "1200px" }}
    >
      <NewsLetterContentWrapper>
        <NewsLetterComponent />
      </NewsLetterContentWrapper>
    </Section>
  );
};
