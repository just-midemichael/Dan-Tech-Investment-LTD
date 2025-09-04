import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const GoldPage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.gold.pageTitle}
        buzzText={productHero.gold.buzzText}
        pageDescription={productHero.gold.pageDescription}
        buzzTextColor={`${productHero.gold.color}`}
        buttonBackground={`${productHero.gold.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.gold.product}
        description={whyThisProduct.gold.description}
        background={`${whyThisProduct.gold.backgroundColor}`}
        productImage={whyThisProduct.gold.image}
      />
      <NewsLetter />
    </main>
  );
};

export default GoldPage;
