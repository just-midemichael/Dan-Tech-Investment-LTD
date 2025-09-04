import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const AgriculturePage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.agriculture.pageTitle}
        buzzText={productHero.agriculture.buzzText}
        pageDescription={productHero.agriculture.pageDescription}
        buzzTextColor={`${productHero.agriculture.color}`}
        buttonBackground={`${productHero.agriculture.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.agriculture.product}
        description={whyThisProduct.agriculture.description}
        background={`${whyThisProduct.agriculture.backgroundColor}`}
        productImage={whyThisProduct.agriculture.image}
      />
      <NewsLetter />
    </main>
  );
};

export default AgriculturePage;
