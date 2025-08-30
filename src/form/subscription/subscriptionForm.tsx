"use client";
import React from "react";
import { ButtonBox, EmailInput, Form, InputBox } from "./style";
import SendIcon from "@mui/icons-material/Send";
import { ActionButton } from "@/component/global/button/button";
import { appStyle } from "@/db/appStyle";

export const SubscriptionForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your submission logic here, e.g., API call or validation
    console.log("Form submitted");
  };

  return (
    <Form
      id="news-letter-form"
      name="news-letter-form"
      onSubmit={handleSubmit}
      method="POST"
      action="/submit-form"
    >
      <InputBox>
        <EmailInput
          type="email"
          required
          id="subscription-email-input"
          aria-label="subscription-email-input"
          placeholder="Enter your email"
        />
      </InputBox>
      <ButtonBox>
        <ActionButton
          id="subscriptionButton"
          type="submit"
          style={{
            background: `${appStyle.buttonIconBackgroundColor}`,
            color: `#ffff`,
          }}
          text={"Subscribe"}
          ariaLabel={"SubscribeButton"}
          onClick={undefined}
        >
          <SendIcon />
        </ActionButton>
      </ButtonBox>
    </Form>
  );
};
