"use client";
import { H, H1, H2, H3, H4, H5, H6 } from "./style";

type HeaderTitleProps = {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
};

export const HeaderTitle1 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H1 className={className} style={style}>
      {children}
    </H1>
  );
};

export const HeaderTitle2 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H2 className={className} style={style}>
      {children}
    </H2>
  );
};

export const HeaderTitle3 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H3 className={className} style={style}>
      {children}
    </H3>
  );
};

export const HeaderTitle4 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H4 className={className} style={style}>
      {children}
    </H4>
  );
};

export const HeaderTitle5 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H5 className={className} style={style}>
      {children}
    </H5>
  );
};

export const HeaderTitle6 = ({
  style,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <H6 className={className} style={style}>
      {children}
    </H6>
  );
};

export const HeroTitle = ({ style, className, children }: HeaderTitleProps) => {
  return (
    <H className={className} style={style}>
      {children}
    </H>
  );
};
