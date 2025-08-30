import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { ContactCard } from "@/component/local/contactCard/contactCard";
import React from "react";
import { ContactContentWrapper } from "./style";

export const ContactSection = () => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <ContactContentWrapper>
        <ContactCard />
      </ContactContentWrapper>
    </Section>
  );
};
