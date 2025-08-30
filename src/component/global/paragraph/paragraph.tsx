import { P1, P2, P3 } from "./style";

type ParagraphProps = {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
};

export const Paragraph1 = ({ style, className, children }: ParagraphProps) => {
  return (
    <P1 className={className} style={style}>
      {children}
    </P1>
  );
};

export const Paragraph2 = ({ style, children, className }: ParagraphProps) => {
  return (
    <P2 className={className} style={style}>
      {children}
    </P2>
  );
};

export const Paragraph3 = ({ style, children, className }: ParagraphProps) => {
  return (
    <P3 className={className} style={style}>
      {children}
    </P3>
  );
};
