"use client";

import { ModalComponent } from "@/component/global/modal/modal";
import { transportationProductBenefits } from "@/db/productBenefits";
import { productHero, whyThisProduct } from "@/db/products";
import { InvestmentForm } from "@/form/investment/investmentForm";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductBenefitsSection } from "@/section/productBenefits/productBenefitsSection";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const TransportationPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageTitle = productHero.agriculture.pageTitle;

  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.transportation.pageTitle}
        buzzText={productHero.transportation.buzzText}
        pageDescription={productHero.transportation.pageDescription}
        buzzTextColor={`${productHero.transportation.color}`}
        buttonBackground={`${productHero.transportation.buttonBackground}`}
        onClick={handleOpen}
      />
      <WhyThisProductSection
        product={whyThisProduct.transportation.product}
        description={whyThisProduct.transportation.description}
        background={`${whyThisProduct.transportation.backgroundColor}`}
        productImage={whyThisProduct.transportation.image}
      />
      <ProductBenefitsSection
        product={transportationProductBenefits}
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
        <InvestmentForm onClose={handleClose} productName={"transportation"} />
      </ModalComponent>
    </main>
  );
};

export default TransportationPage;
export const metadata = {
  title: "Invest | Transportation",
  description: "Start investing with Dan-Tech Investments Limited",
};
