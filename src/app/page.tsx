import { CoreValueSection } from "@/section/coreValue/coreValueSection";
import { HeroSection } from "@/section/hero/heroSection";
import { HowToInvestSection } from "@/section/howToInvest/howToInvestSection";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductSection } from "@/section/product/productSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";

const Home = () => {
  return (
    <main style={{ width: "100%" }}>
      <HeroSection />
      <CoreValueSection />
      <ProductSection />
      <HowToInvestSection />
      <WhyDanTechSection />
      <NewsLetter />
    </main>
  );
};

export default Home;
export const metadata = {
  title: "Home - DIG",
  description: "Welcome to Dan Investment Group",
};
