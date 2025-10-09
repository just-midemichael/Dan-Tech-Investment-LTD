import { CoreValueSection } from "@/section/coreValue/coreValueSection";
import { HomeHeroSection } from "@/section/homeHero/homeHeroSection";
import { HowToInvestSection } from "@/section/howToInvest/howToInvestSection";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductSection } from "@/section/product/productSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { Metadata } from "next";

const Home = () => {
  return (
    <main style={{ width: "100%" }}>
      <HomeHeroSection />
      <CoreValueSection />
      <ProductSection />
      <HowToInvestSection />
      <WhyDanTechSection />
      <NewsLetter />
    </main>
  );
};

export default Home;
export const metadata: Metadata = {
  title: "Explore New Ways to Grow your Income",
  description: "Welcome to Dan-Tech Investments Limited Official Website",
};
