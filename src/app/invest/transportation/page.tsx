import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const TransportationPage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.transportation.pageTitle}
        buzzText={productHero.transportation.buzzText}
        pageDescription={productHero.transportation.pageDescription}
        buzzTextColor={`${productHero.transportation.color}`}
        buttonBackground={`${productHero.transportation.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.transportation.product}
        description={whyThisProduct.transportation.description}
        background={`${whyThisProduct.transportation.backgroundColor}`}
        productImage={whyThisProduct.transportation.image}
      />
      <NewsLetter />
    </main>
  );
};

export default TransportationPage;
