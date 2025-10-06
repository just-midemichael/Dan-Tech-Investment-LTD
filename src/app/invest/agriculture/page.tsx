"use client";

import { ModalComponent } from "@/component/global/modal/modal";
import { agricultureProductBenefits } from "@/db/productBenefits";
import { productHero, whyThisProduct } from "@/db/products";
import { InvestmentForm } from "@/form/investment/investmentForm";
import { NewsLetter } from "@/section/newsLetter/newsLetter";
import { ProductBenefitsSection } from "@/section/productBenefits/productBenefitsSection";
import { ProductHeroSection } from "@/section/productHero/productHeroSection";
import { WhyDanTechSection } from "@/section/whyDanTech/whyDanTechSection";
import { WhyThisProductSection } from "@/section/whyThisProduct/whyThisProductSection";
import React from "react";

const AgriculturePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageTitle = productHero.agriculture.pageTitle;

  return (
    <main>
      <ProductHeroSection
        pageTitle={productHero.agriculture.pageTitle}
        buzzText={productHero.agriculture.buzzText}
        pageDescription={productHero.agriculture.pageDescription}
        buzzTextColor={`${productHero.agriculture.color}`}
        buttonBackground={`${productHero.agriculture.buttonBackground}`}
        onClick={handleOpen}
      />
      <WhyThisProductSection
        product={whyThisProduct.agriculture.product}
        description={whyThisProduct.agriculture.description}
        background={`${whyThisProduct.agriculture.backgroundColor}`}
        productImage={whyThisProduct.agriculture.image}
      />
      <ProductBenefitsSection
        product={agricultureProductBenefits}
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
        <InvestmentForm onClose={handleClose} productName={"agriculture"} />
      </ModalComponent>
    </main>
  );
};

export default AgriculturePage;

export const metadata = {
  title: "Invest | Agriculture",
  description: "Start investing with Dan-Tech Investments Limited",
};
