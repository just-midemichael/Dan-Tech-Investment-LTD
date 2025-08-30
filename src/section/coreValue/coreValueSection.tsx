"use client";
import React from "react";
import { CoreValueContentWrapper, TitleButtonBox, ValueBox } from "./style";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { appStyle } from "@/db/appStyle";
import { coreValueContent, coreValues } from "@/db/coreValue";
import { CoreValueComponent } from "@/component/local/coreValueComponent/coreValueComponent";

export const CoreValueSection = () => {
  return (
    <Section
      bg={`${appStyle.coreValueBackgroundColor}`}
      style={{ maxWidth: `${appStyle.appContentmaxWidth}` }}
    >
      <CoreValueContentWrapper>
        <TitleButtonBox>
          <HeaderTitle1
            style={{
              color: `${appStyle.headerTitleColor}`,
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
            }}
          >
            {coreValueContent.sectionTitleText}
          </HeaderTitle1>
        </TitleButtonBox>
        <ValueBox
          style={{ borderLeft: `0.5px solid ${appStyle.headerTitleColor}` }}
        >
          {coreValues.map((data) => (
            <CoreValueComponent
              key={data.id}
              valueTitle={data.title}
              valueDescription={data.description}
              Icon={React.createElement(data.icon, {
                sx: { height: "100%", width: "100%", color: "inherit" },
              })}
            />
          ))}
        </ValueBox>
      </CoreValueContentWrapper>
    </Section>
  );
};
