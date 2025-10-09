import { contactUsHero } from "@/db/globalHeroSection";
import { ContactSection } from "@/section/contactSection/contactSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";
import { Metadata } from "next";

const Contact = () => {
  return (
    <main style={{ width: "100%" }}>
      <GlobalHeroSection
        pageTitle={contactUsHero.bigText}
        pageDescription={contactUsHero.smallText}
        pageImage={contactUsHero.image}
        backgroundImage={`linear-gradient(to bottom, #f6fafff5, #f6fafff5), url("/global-hero-bg.png")`}
        imageDisplay={true}
      />
      <ContactSection />
    </main>
  );
};

export default Contact;
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dan-Tech Investments Limited",
};
