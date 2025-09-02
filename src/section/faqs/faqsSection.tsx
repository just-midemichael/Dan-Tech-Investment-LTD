import React from "react";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { FaqsContentWrapper } from "./style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HeaderTitle6 } from "@/component/global/title/headerTitle";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";
import { appStyle } from "@/db/appStyle";
import { faqs } from "@/db/faqs";

export const FaqsSection = () => {
  return (
    <Section style={{ maxWidth: "1200px" }}>
      <FaqsContentWrapper>
        {faqs.map((item) => (
          <Accordion
            key={item.id}
            style={{
              maxWidth: "1000px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "#fff" }} fontSize="large" />
              }
              aria-controls="panel2-content"
              id="panel2-header"
              style={{
                background: appStyle.headerTitleColor,
                minHeight: "54px",
              }}
            >
              <HeaderTitle6
                style={{
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                {item.title}
              </HeaderTitle6>
            </AccordionSummary>
            <AccordionDetails>
              <Paragraph2
                style={{
                  fontWeight: 500,
                  color: appStyle.paragraphColor,
                }}
              >
                {item.description}
              </Paragraph2>
            </AccordionDetails>
          </Accordion>
        ))}
      </FaqsContentWrapper>
    </Section>
  );
};
