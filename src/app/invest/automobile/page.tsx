import { autoMobileProductBenefits } from "@/db/productBenefits";
import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductBenefitsSection } from "@/section/productBenefits/productBenefitsSection";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const AutoMobilePage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.autoMobile.pageTitle}
        buzzText={productHero.autoMobile.buzzText}
        pageDescription={productHero.autoMobile.pageDescription}
        buzzTextColor={`${productHero.autoMobile.color}`}
        buttonBackground={`${productHero.autoMobile.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.autoMobile.product}
        description={whyThisProduct.autoMobile.description}
        background={`${whyThisProduct.autoMobile.backgroundColor}`}
        productImage={whyThisProduct.autoMobile.image}
      />
      <ProductBenefitsSection product={autoMobileProductBenefits} />
      <WhyDanTechSection />
      <NewsLetter />
    </main>
  );
};

export default AutoMobilePage;
