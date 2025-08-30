"use client";

import React from "react";
import {
  GalleryList,
  GalleryBox,
  MissionContentWrapper,
  Span,
  PictureItem,
  Pics,
} from "./style";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import { HeaderTitle1 } from "@/component/global/title/headerTitle";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";

import { ourMission } from "@/db/gallery";

export const OurMissionSection = () => {
  return (
    <Section bg={appStyle.headerTitleColor}>
      <MissionContentWrapper>
        <HeaderTitle1
          style={{
            color: "#ffff",
            fontWeight: appStyle.appGlobalTitleFontWeight,
          }}
        >
          Our Mission
        </HeaderTitle1>
        <Paragraph1
          style={{
            color: "#ffff",
            fontWeight: 400,
            maxWidth: "700px",
          }}
        >
          <Span style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            inventore neque placeat quod facere dicta aliquid quo vel. Amet
            deleniti eaque ab recusandae beatae? Quas veritatis quasi ducimus ab
            odio?
          </Span>
        </Paragraph1>
        <GalleryBox>
          <GalleryList variant="woven" cols={3} gap={8}>
            {ourMission.map((data) => (
              <PictureItem key={data.id}>
                <Pics src={data.image} loading="lazy" alt={`${data.image}`} />
              </PictureItem>
            ))}
          </GalleryList>
        </GalleryBox>
      </MissionContentWrapper>
    </Section>
  );
};
