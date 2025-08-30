import React from "react";
import {
  SortNumberBox,
  StepBox,
  StepDescription,
  StepsContentContainer,
  StepTitle,
} from "./style";
import { HeaderTitle5 } from "@/component/global/title/headerTitle";
import { Paragraph2 } from "@/component/global/paragraph/paragraph";

type StepsComponentProps = {
  sortNumber: string;
  title: string;
  description: string;
};

export const StepsComponent = ({
  sortNumber,
  title,
  description,
}: StepsComponentProps) => {
  return (
    <StepsContentContainer>
      <SortNumberBox>{sortNumber}</SortNumberBox>
      <StepBox>
        <StepTitle>
          <HeaderTitle5
            style={{
              fontWeight: `500`,
            }}
          >
            {title}
          </HeaderTitle5>
        </StepTitle>
        <StepDescription>
          <Paragraph2>{description}</Paragraph2>
        </StepDescription>
      </StepBox>
    </StepsContentContainer>
  );
};
