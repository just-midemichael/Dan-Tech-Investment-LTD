"use client";

import { ModalComponent } from "@/component/global/modal/modal";
import { realEstateProductBenefits } from "@/db/productBenefits";
import { productHero, whyThisProduct } from "@/db/products";
import { InvestmentForm } from "@/form/investment/investmentForm";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductBenefitsSection } from "@/section/productBenefits/productBenefitsSection";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const RealEstatePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageTitle = productHero.agriculture.pageTitle;

  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.realEstate.pageTitle}
        buzzText={productHero.realEstate.buzzText}
        pageDescription={productHero.realEstate.pageDescription}
        buzzTextColor={`${productHero.realEstate.color}`}
        buttonBackground={`${productHero.realEstate.buttonBackground}`}
        onClick={handleOpen}
      />
      <WhyThisProductSection
        product={whyThisProduct.realEstate.product}
        description={whyThisProduct.realEstate.description}
        background={`${whyThisProduct.realEstate.backgroundColor}`}
        productImage={whyThisProduct.realEstate.image}
      />
      <ProductBenefitsSection
        product={realEstateProductBenefits}
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
        <InvestmentForm onClose={handleClose} productName={"real estate"} />
      </ModalComponent>
    </main>
  );
};

export default RealEstatePage;
