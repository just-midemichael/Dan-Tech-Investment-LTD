import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import SecurityIcon from "@mui/icons-material/Security";
import HubIcon from "@mui/icons-material/Hub";
import StyleIcon from "@mui/icons-material/Style";
import CompostIcon from "@mui/icons-material/Compost";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type ProductBenefitsProps = {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  title: string;
  description: string;
};

export const agricultureProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: AssignmentReturnedIcon,
    title: "Easy Accessibility",
    description:
      "Investing with Dan-Tech means your financial future is always within reach. Whether you're at home, in the office, or on the move, Dan-Tech ensures that your investment experience is seamless and stress-free.",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: HubIcon,
    title: "High Growth Potential",
    description:
      "Dan-Tech positions your investment to grow across scalable sectors. When you invest, you're not just growing your money but multiplying your possibilities of higher return on investment.",
  },
];

export const autoMobileProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: AssignmentReturnedIcon,
    title: "Easy Accessibility",
    description:
      "Investing with Dan-Tech means your financial future is always within reach. Whether you're at home, in the office, or on the move, Dan-Tech ensures that your investment experience is seamless and stress-free.",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: CompostIcon,
    title: "Stable ROI",
    description:
      "Dan-Tech’s investment products are built for consistency, stable, predictable returns. This product is structured to minimize volatility while maintaining healthy yield.",
  },
];

export const realEstateProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: CompostIcon,
    title: "Stable ROI",
    description:
      "Dan-Tech’s investment products are built for consistency, stable, predictable returns. This product is structured to minimize volatility while maintaining healthy yield.",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: HubIcon,
    title: "High Growth Potential",
    description:
      "Dan-Tech positions your investment to grow across scalable sectors. When you invest, you're not just growing your money but multiplying your possibilities of higher return on investment.",
  },
];

export const stockTradingProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: StyleIcon,
    title: "Flexible Investment Option",
    description:
      "Flexible Investment Option gives you control without compromise. Whether you're investing short-term or building long-term wealth, this product adapts to your goals, risk appetite, and cash flow needs. ",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: AssignmentReturnedIcon,
    title: "High Diversification",
    description:
      "Dan-Tech will ensure your capital is always working across multiple investment options. This is a strategy for consistent return on investment.",
  },
];

export const transportationProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: AssignmentReturnedIcon,
    title: "Easy Accessibility",
    description:
      "Investing with Dan-Tech means your financial future is always within reach. Whether you're at home, in the office, or on the move, Dan-Tech ensures that your investment experience is seamless and stress-free.",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: HubIcon,
    title: "High Growth Potential",
    description:
      "Dan-Tech positions your investment to grow across scalable sectors. When you invest, you're not just growing your money but multiplying your possibilities of higher return on investment.",
  },
];

export const goldProductBenefits: ProductBenefitsProps[] = [
  {
    id: 0,
    icon: AssignmentReturnedIcon,
    title: "Easy Accessibility",
    description:
      "Investing with Dan-Tech means your financial future is always within reach. Whether you're at home, in the office, or on the move, Dan-Tech ensures that your investment experience is seamless and stress-free.",
  },
  {
    id: 1,
    icon: SecurityIcon,
    title: "Secure Investment",
    description:
      "Your money deserves deserves certainty. At Dan-Tech, we don’t just promise security, we engineer it. When you invest with Dan-Tech, you're building wealth on a foundation of trust.",
  },
  {
    id: 3,
    icon: CompostIcon,
    title: "Stable ROI",
    description:
      "Dan-Tech’s investment products are built for consistency, stable, predictable returns. This product is structured to minimize volatility while maintaining healthy yield.",
  },
];
