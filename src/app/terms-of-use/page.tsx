import { termAndConditionHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { TermsAndConditionsSection } from "@/section/termsAndCondition/termsAndConditionSection";

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
export const metadata = {
  title: "Terms of Use - DIG",
  description: "Learn more about DIG's terms of use",
};
