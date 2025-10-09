import { termAndConditionHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { TermsAndConditionsSection } from "@/section/termsAndCondition/termsAndConditionSection";
import { Metadata } from "next";

const TermsOfUse = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={termAndConditionHero.bigText}
        pageDescription={termAndConditionHero.smallText}
        pageImage={termAndConditionHero.image}
        imageDisplay={false}
      />
      <TermsAndConditionsSection />
    </main>
  );
};

export default TermsOfUse;
export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Learn more about Dan-Tech Investments Limited's terms of use",
};
