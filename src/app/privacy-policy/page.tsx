import { privacyPolicyHero } from "@/db/globalHeroSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { PrivacyPolicySection } from "@/section/privacyPolicy/privacyPolicySection";
import { Metadata } from "next";

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
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn more about Dan-Tech Investments Limited's privacy policy",
};
