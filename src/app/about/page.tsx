import { aboutUsHero } from "@/db/globalHeroSection";
import { ContactSection } from "@/section/contactSection/contactSection";
import { CoreValueSection } from "@/section/coreValue/coreValueSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { OurMissionSection } from "@/section/ourMission/ourMissionSection";

const About = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={aboutUsHero.bigText}
        pageDescription={aboutUsHero.smallText}
        pageImage={aboutUsHero.image}
        backgroundImage={`linear-gradient(to bottom, #f6fafff5, #f6fafff5), url("/global-hero-bg.png")`}
        imageDisplay={true}
      />
      <OurMissionSection />
      <CoreValueSection />
      <ContactSection />
    </main>
  );
};

export default About;
export const metadata = {
  title: "About Dan-Tech Investments Limited",
  description: "Learn more about Dan-Tech Investments Limited",
};
