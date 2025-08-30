"use client";

import React from "react";
import {
  BoxOne,
  BoxTwo,
  ContactCardWrapper,
  ImageContainer,
  OfficeAddressContainer,
  Image,
  Link,
  OfficeAddressLink,
  EmailAddressContainer,
  PhoneContainer,
  SocialMediaContainer,
  SocialMediaIcon,
  EmailPhoneLink,
} from "./style";
import { appStyle } from "@/db/appStyle";
import contactUs from "../../../../public/contact-us-1.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  emailAddress,
  officeAddress,
  phoneNumber,
  socialMediaAddress,
} from "@/db/contactDetail";
import { HeaderTitle6 } from "@/component/global/title/headerTitle";

export const ContactCard = () => {
  return (
    <ContactCardWrapper
      style={{ background: appStyle.cardDefaultBackgroundColor }}
    >
      <BoxOne>
        <ImageContainer>
          <Image src={contactUs} alt="contact-us-image" />
        </ImageContainer>
        <OfficeAddressContainer>
          {officeAddress.map((data) => (
            <OfficeAddressLink key={data.id}>
              <LocationOnOutlinedIcon fontSize="small" /> {data.address}
            </OfficeAddressLink>
          ))}
        </OfficeAddressContainer>
      </BoxOne>

      <BoxTwo>
        <EmailAddressContainer>
          <HeaderTitle6
            style={{ color: appStyle.headerTitleColor, paddingBottom: 6 }}
          >
            Email Address
          </HeaderTitle6>
          {emailAddress.map((data) => (
            <EmailPhoneLink key={data.id} href={`mailto:${data.email}`}>
              <EmailOutlinedIcon fontSize="small" /> {data.email}
            </EmailPhoneLink>
          ))}
        </EmailAddressContainer>

        <PhoneContainer>
          <HeaderTitle6
            style={{ color: appStyle.headerTitleColor, paddingBottom: 6 }}
          >
            Phone Number
          </HeaderTitle6>
          {phoneNumber.map((data) => (
            <EmailPhoneLink key={data.id} href={`tel:${data.phone}`}>
              <PermPhoneMsgOutlinedIcon fontSize="small" /> {data.phone}
            </EmailPhoneLink>
          ))}
        </PhoneContainer>

        <SocialMediaContainer>
          <HeaderTitle6
            style={{ color: appStyle.headerTitleColor, paddingBottom: 6 }}
          >
            Social Media
          </HeaderTitle6>
          {socialMediaAddress.map((data) => (
            <a
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                cursor: "default",
              }}
              target="_blank"
              key={data.platform}
              href={`${data.url}`}
            >
              <SocialMediaIcon>
                {React.createElement(data.icon)}
              </SocialMediaIcon>
              <Link>{data.handle}</Link>
            </a>
          ))}
        </SocialMediaContainer>
      </BoxTwo>
    </ContactCardWrapper>
  );
};
