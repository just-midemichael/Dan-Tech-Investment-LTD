import React from "react";
import {
  DescriptionBox,
  FormContainer,
  NewsLetterComponentWrapper,
  TextContainer,
  TitleBox,
} from "./style";
import { appStyle } from "@/db/appStyle";
import { SubscriptionForm } from "@/form/subscription/subscriptionForm";
import { HeaderTitle2 } from "@/component/global/title/headerTitle";
import { Paragraph1 } from "@/component/global/paragraph/paragraph";

export const NewsLetterComponent = () => {
  return (
    <NewsLetterComponentWrapper
      style={{
        background: `linear-gradient(to bottom, #80b1ede7, #80b1edff), url("/global-hero-bg.png")`,
      }}
    >
      <TextContainer>
        <TitleBox>
          <HeaderTitle2
            style={{
              color: "#ffff",
              fontWeight: `${appStyle.appGlobalTitleFontWeight}`,
            }}
          >
            Join Our Newsletter
          </HeaderTitle2>
        </TitleBox>
        <DescriptionBox>
          <Paragraph1
            style={{
              color: "#ffff",
              fontWeight: 500,
            }}
          >
            Subscribe to our newsletter for the latest updates on our products,
            and services.
          </Paragraph1>
        </DescriptionBox>
      </TextContainer>
      <FormContainer>
        <SubscriptionForm />
      </FormContainer>
    </NewsLetterComponentWrapper>
  );
};
