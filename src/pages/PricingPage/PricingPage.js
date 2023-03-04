import React from "react";
import { StyledPricingPage, StyledPricingCards } from "./PricingPage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { PriceCard } from "../../components/priceCard/priceCard";
import { RegisterSection } from "../../components/registerBanner/Register";
import { PoliciesSection } from "../../components/policiesSection/PoliciesSection";
import { pricingPageConfig } from "../../@config/config";

export const PricingPage = () => {
  return (
    <StyledPricingPage>
      <Header data={pricingPageConfig.headerSection} />
      <StyledPricingCards>
        {pricingPageConfig.pricingCards?.map((price, i) => (
          <PriceCard key={`${i}_${price}`} data={price} />
        ))}
      </StyledPricingCards>
      <RegisterSection data={pricingPageConfig.registerBanner} />
      <PoliciesSection data={pricingPageConfig.policies} />
    </StyledPricingPage>
  );
};
