import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const RealEstatePage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.realEstate.pageTitle}
        buzzText={productHero.realEstate.buzzText}
        pageDescription={productHero.realEstate.pageDescription}
        buzzTextColor={`${productHero.realEstate.color}`}
        buttonBackground={`${productHero.realEstate.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.realEstate.product}
        description={whyThisProduct.realEstate.description}
        background={`${whyThisProduct.realEstate.backgroundColor}`}
        productImage={whyThisProduct.realEstate.image}
      />
      <NewsLetter />
    </main>
  );
};

export default RealEstatePage;
