"use client";

import { ModalComponent } from "@/component/global/modal/modal";
import { goldProductBenefits } from "@/db/productBenefits";
import { productHero, whyThisProduct } from "@/db/products";
import { InvestmentForm } from "@/form/investment/investmentForm";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductBenefitsSection } from "@/section/productBenefits/productBenefitsSection";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const GoldPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageTitle = productHero.agriculture.pageTitle;
  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.gold.pageTitle}
        buzzText={productHero.gold.buzzText}
        pageDescription={productHero.gold.pageDescription}
        buzzTextColor={`${productHero.gold.color}`}
        buttonBackground={`${productHero.gold.buttonBackground}`}
        onClick={handleOpen}
      />
      <WhyThisProductSection
        product={whyThisProduct.gold.product}
        description={whyThisProduct.gold.description}
        background={`${whyThisProduct.gold.backgroundColor}`}
        productImage={whyThisProduct.gold.image}
      />
      <ProductBenefitsSection
        product={goldProductBenefits}
        onClick={handleOpen}
      />
      <WhyDanTechSection />
      <NewsLetter />
      <ModalComponent
        open={open}
        onClose={handleClose}
        modalTitle={pageTitle}
        modalDescription={`${pageTitle} model for investment`}
      >
        <InvestmentForm onClose={handleClose} productName={"gold"} />
      </ModalComponent>
      <NewsLetter />
    </main>
  );
};

export default GoldPage;
