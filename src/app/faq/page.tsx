import { faqHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";

const Faqs = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={faqHero.bigText}
        // pageDescription={faqHero.smallText}
        pageImage={faqHero.image}
        imageDisplay={true}
      />
    </main>
  );
};

export default Faqs;
export const metadata = {
  title: "Frequently Asked Questions - DIG",
  description: "Find answers to common questions about DIG",
};
