import { investHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { ProductSection } from "@/section/product/productSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { Metadata } from "next";

const Invest = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={investHero.bigText}
        pageDescription={investHero.smallText}
        pageImage={investHero.image}
        backgroundImage={`linear-gradient(to bottom, #f6fafff5, #f6fafff5), url("/global-hero-bg.png")`}
        imageDisplay={true}
      />
      <ProductSection />
      <WhyDanTechSection />
    </main>
  );
};

export default Invest;
export const metadata: Metadata = {
  title: { absolute: "Invest with Dan-Tech Investments Limited" },
  description: "Start investing with Dan-Tech Investments Limited",
};
