import { SectionContainer, SectionContentWrapper } from "./style";

interface SectionProps {
  bg?: string;
  bgImage?: string;
  bgColor?: string;
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
  padding?: string;
}

export const Section = ({
  bg,
  bgImage,
  bgColor,
  style,
  children,
  padding,
}: SectionProps) => {
  return (
    <SectionContainer
      style={{
        backgroundImage: `${bgImage}`,
        background: `${bg}`,
        backgroundColor: `${bgColor}`,
        padding: `${padding}`,
      }}
    >
      <SectionContentWrapper style={style}>{children}</SectionContentWrapper>
    </SectionContainer>
  );
};
