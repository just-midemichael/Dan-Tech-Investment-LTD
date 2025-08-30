import { privacyPolicyHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { PrivacyPolicySection } from "@/section/privacyPolicy/privacyPolicySection";

const PrivacyPolicy = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={privacyPolicyHero.bigText}
        pageDescription={privacyPolicyHero.smallText}
        pageImage={privacyPolicyHero.image}
        imageDisplay={false}
      />
      <PrivacyPolicySection />
    </main>
  );
};

export default PrivacyPolicy;
export const metadata = {
  title: "Privacy Policy - DIG",
  description: "Learn more about DIG's privacy policy",
};
