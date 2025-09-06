"use client";
import React, { useEffect, useState } from "react";
import { BoxOne, BoxTwo, ButtonBox, EmailInput, Form, InputBox } from "./style";
import SendIcon from "@mui/icons-material/Send";
import { ActionButton } from "@/component/global/button/button";
import { appStyle } from "@/db/appStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Paragraph3 } from "@/component/global/paragraph/paragraph";
import ReactConfetti from "react-confetti";

import { Circles } from "react-loader-spinner";

export const SubscriptionForm = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    if (showConfetti) console.log("Confetti should be showing!");
  }, [showConfetti]);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email address is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      setLoading(false);
      if (response.ok) {
        toast.success("🎉 Subscribed successfully!");
        setShowConfetti(true);
        resetForm();
        setTimeout(() => setShowConfetti(false), 3000);
      } else if (response.status === 409) {
        toast.error("⚠️ You're already subscribed with this email.");
      } else {
        toast.error("❌ Subscription failed. Try again!");
      }
    },
  });

  return (
    <Form
      id="news-letter-form"
      name="news-letter-form"
      onSubmit={formik.handleSubmit}
    >
      <BoxOne>
        <InputBox>
          <EmailInput
            type="email"
            name="email"
            id="subscription-email-input"
            aria-label="subscription-email-input"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
        </InputBox>
        <ButtonBox>
          <ActionButton
            id="subscriptionButton"
            type="submit"
            style={{
              background: appStyle.buttonIconBackgroundColor,
              color: `#ffff`,
            }}
            text={loading ? "" : "Subscribe"}
            ariaLabel={"SubscriptionButton"}
            disabled={loading}
          >
            {loading ? (
              <Circles
                height="30"
                width="30"
                color="#fff"
                ariaLabel="loading"
              />
            ) : (
              <SendIcon />
            )}
          </ActionButton>
        </ButtonBox>
      </BoxOne>
      <BoxTwo>
        {formik.touched.email && formik.errors.email && (
          <Paragraph3 style={{ color: "darkred" }}>
            {formik.errors.email}
          </Paragraph3>
        )}
      </BoxTwo>
      {showConfetti && (
        <ReactConfetti
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
          width={windowSize.width}
          height={windowSize.height}
        />
      )}
    </Form>
  );
};
