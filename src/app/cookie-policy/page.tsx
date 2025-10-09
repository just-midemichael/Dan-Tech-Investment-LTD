import { cookiePolicyHero } from "@/db/globalHeroSection";
import { CookiePolicySection } from "@/section/cookiePolicySection/cookiePolicySection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { Metadata } from "next";

const CookiePolicy = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={cookiePolicyHero.bigText}
        pageDescription={cookiePolicyHero.smallText}
        pageImage={cookiePolicyHero.image}
        imageDisplay={false}
      />
      <CookiePolicySection />
    </main>
  );
};

export default CookiePolicy;
export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn more about Dan-Tech Investments Limited's cookie policy",
};
