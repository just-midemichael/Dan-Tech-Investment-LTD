import { contactUsHero } from "@/db/globalHeroSection";
import { ContactSection } from "@/section/contactSection/contactSection";
import { GlobalHeroSection } from "@/section/globalHero/globalHeroSection";

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
export const metadata = {
  title: "Contact Us | Dan-Tech Investments Limited",
  description: "Get in touch with Dan-Tech Investments Limited",
};
// export const dynamic = "force-dynamic"; // This page should always be dynamic
// export const revalidate = 60; // Revalidate every 60 seconds
// export const fetchCache = "force-no-store"; // Do not cache this page
// export const runtime = "edge"; // Use edge runtime for better performance
// export const preferredRegion = "auto"; // Automatically select the best region for this page
// export const tags = ["contact", "support"]; // Tags for this page
// export const robots = {
//   index: true,
//   follow: true,
//   noarchive: true,
//   nosnippet: true,
// }; // Robots meta tags for SEO
// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// }; // Viewport settings for responsive design
// export const openGraph = {
//   title: "Contact Us",
//   description: "Get in touch with Dan-Tech Investments Limited",
//   url: "https://Dan-Tech Investments Limited-website.com/contact",
//   siteName: "Dan-Tech Investments Limited | Dan Investment Group",
//   images: [
//     {
//       url: "https://Dan-Tech Investments Limited-website.com/images/contact.jpg",
//       width: 1200,
//       height: 630,
//       alt: "Contact Dan-Tech Investments Limited",
//     },
//   ],
// }; // Open Graph meta tags for social media sharing
// export const twitter = {
//   card: "summary_large_image",
//   title: "Contact Us",
//   description: "Get in touch with Dan-Tech Investments Limited",
//   site: "@Dan-Tech Investments Limited_website",
//   creator: "@Dan-Tech Investments Limited_website",
//   images: ["https://Dan-Tech Investments Limited-website.com/images/contact.jpg"],
// }; // Twitter meta tags for social media sharing
// export const icons = {
//   icon: "/favicon.ico",
//   apple: "/apple-touch-icon.png",
//   shortcut: "/shortcut-icon.png",
// }; // Icons for the website
// export const manifest = "/manifest.json"; // Web app manifest for PWA support
// export const themeColor = "#ffffff"; // Theme color for the website
// export const alternates = {
//   canonical: "https://Dan-Tech Investments Limited-website.com/contact",
//   languages: {
//     "en-US": "/contact",
//     "fr-FR": "/fr/contact",
//   },
// }; // Alternate URLs for different languages
// export const metadataBase = new URL("https://Dan-Tech Investments Limited-website.com"); // Base URL for metadata
// export const dynamicParams = true; // Enable dynamic parameters for this page
// export const dynamicRoute = "/contact/[id]"; // Dynamic route for contact page
// export const notFound = {
//   title: "Page Not Found",
//   description: "The page you are looking for does not exist.",
// }; // Custom 404 page metadata
// export const error = {
//   title: "Error",
//   description: "An error occurred while processing your request.",
// }; // Custom error page metadata
// export const loading = {
//   title: "Loading...",
//   description: "Please wait while we load the page.",
// }; // Loading state metadata
// export const fallback = {
//   title: "Fallback",
//   description: "This is a fallback page.",
// }; // Fallback page metadata
// export const notFoundPage = {
//   title: "Not Found",
//   description: "The page you are looking for does not exist.",
// }; // Custom 404 page metadata
// export const errorPage = {
//   title: "Error",
//   description: "An error occurred while processing your request.",
// }; // Custom error page metadata
// export const loadingPage = {
//   title: "Loading...",
//   description: "Please wait while we load the page.",
// }; // Loading state metadata
// export const fallbackPage = {
//   title: "Fallback",
//   description: "This is a fallback page.",
// }; // Fallback page metadata
// export const notFoundRoute = {
//   title: "Not Found",
//   description: "The page you are looking for does not exist.",
// }; // Custom 404 route metadata
// export const errorRoute = {
//   title: "Error",
//   description: "An error occurred while processing your request.",
// }; // Custom error route metadata
// export const loadingRoute = {
//   title: "Loading...",
//   description: "Please wait while we load the page.",
// }; // Loading state route metadata
// export const fallbackRoute = {
//   title: "Fallback",
//   description: "This is a fallback route.",
// }; // Fallback route metadata
// export const notFoundComponent = {
//   title: "Not Found",
//   description: "The page you are looking for does not exist.",
// }; // Custom 404 component metadata
