"use client";
import { footerCompanyLinks, footerLegalLinks } from "@/db/footerLink";

import {
  AddressBox,
  Box1,
  Box2,
  Box3,
  CompanyLinkContainer,
  ContactBox,
  CopyrightBox,
  CopyrightText,
  EmailPhoneBox,
  EmailPhoneLink,
  FooterContainer,
  FooterContentWrapper,
  LegalLinkContainer,
  Link,
  LinksBox,
  LinksWrapper,
  Logo,
  LogoBox,
  LogoSocialContainer,
  SocialMediaBox,
  SocialMediaIcon,
} from "./style";
import whitelogo from "../../../../public/di-logo-white.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { HeaderTitle6 } from "@/component/global/title/headerTitle";
import {
  emailAddress,
  officeAddress,
  phoneNumber,
  socialMediaAddress,
} from "@/db/contactDetail";
import React from "react";
import { useRouter } from "next/navigation";
import { appStyle } from "@/db/appStyle";

export const Footer = () => {
  const router = useRouter();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer>
      <FooterContainer>
        <FooterContentWrapper
          style={{ maxWidth: `${appStyle.appContentmaxWidth}` }}
        >
          <Box1>
            <LogoSocialContainer>
              <LogoBox>
                <Logo
                  src={whitelogo}
                  alt="Dan-Tech Logo"
                  onClick={() => router.push("/")}
                />
              </LogoBox>

              <SocialMediaBox>
                {socialMediaAddress.map((data) => (
                  <a
                    style={{ display: "flex" }}
                    target="_blank"
                    key={data.platform}
                    href={`${data.url}`}
                  >
                    <SocialMediaIcon>
                      {React.createElement(data.icon)}
                    </SocialMediaIcon>
                  </a>
                ))}
              </SocialMediaBox>
            </LogoSocialContainer>

            <LinksWrapper>
              <CompanyLinkContainer>
                <HeaderTitle6>Company</HeaderTitle6>
                <LinksBox>
                  {footerCompanyLinks.map((link) => (
                    <Link
                      onClick={() => router.push(link.url)}
                      key={link.label}
                    >
                      {link.label}
                    </Link>
                  ))}
                </LinksBox>
              </CompanyLinkContainer>

              <LegalLinkContainer>
                <HeaderTitle6>Legal</HeaderTitle6>
                <LinksBox>
                  {footerLegalLinks.map((link) => (
                    <Link
                      onClick={() => router.push(link.url)}
                      key={link.label}
                    >
                      {link.label}
                    </Link>
                  ))}
                </LinksBox>
              </LegalLinkContainer>
            </LinksWrapper>
          </Box1>
          <Box2>
            <HeaderTitle6>Contact Us</HeaderTitle6>
            <ContactBox>
              <EmailPhoneBox>
                {emailAddress.map((data) => (
                  <EmailPhoneLink key={data.id} href={`mailto:${data.email}`}>
                    <EmailOutlinedIcon fontSize="small" />
                    {data.email}
                  </EmailPhoneLink>
                ))}

                {phoneNumber.map((data) => (
                  <EmailPhoneLink key={data.id} href={`tel:${data.phone}`}>
                    <PermPhoneMsgOutlinedIcon fontSize="small" /> {data.phone}
                  </EmailPhoneLink>
                ))}
              </EmailPhoneBox>
              <AddressBox>
                {officeAddress.map((data) => (
                  <Link key={data.id}>
                    <LocationOnOutlinedIcon fontSize="small" /> {data.address}
                  </Link>
                ))}
              </AddressBox>
            </ContactBox>
          </Box2>

          <Box3>
            <CopyrightBox>
              <CopyrightText>
                &copy;{year} Dan-Tech Investments Limited, All rights reserved
              </CopyrightText>
            </CopyrightBox>
          </Box3>
        </FooterContentWrapper>
      </FooterContainer>
    </footer>
  );
};
