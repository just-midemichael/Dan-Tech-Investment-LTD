import { productHero, whyThisProduct } from "@/db/products";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const StockTradingPage = () => {
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.stockTrading.pageTitle}
        buzzText={productHero.stockTrading.buzzText}
        pageDescription={productHero.stockTrading.pageDescription}
        buzzTextColor={`${productHero.stockTrading.color}`}
        buttonBackground={`${productHero.stockTrading.buttonBackground}`}
        onClick={undefined}
      />
      <WhyThisProductSection
        product={whyThisProduct.stockTrading.product}
        description={whyThisProduct.stockTrading.description}
        background={`${whyThisProduct.stockTrading.backgroundColor}`}
        productImage={whyThisProduct.stockTrading.image}
      />
      <NewsLetter />
    </main>
  );
};

export default StockTradingPage;
