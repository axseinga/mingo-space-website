import React from "react";
import {
  StyledPricingPage,
  StyledPricingCards,
  PricingPageHeader,
} from "./PricingPage.styled";
import { PriceCard } from "../../components/priceCard/priceCard";
import { RegisterSection } from "../../components/registerBanner/Register";
import { PoliciesSection } from "../../components/policiesSection/PoliciesSection";
import { pricingPageConfig } from "../../@config/config";
import { Spacer } from "../../styles/elements";
import { Animate } from "../../components/animate/animate";

export const PricingPage = () => {
  return (
    <StyledPricingPage>
      <Spacer times={4} />
      <PricingPageHeader>
        <Animate>
          <h1>{pricingPageConfig.headerSection.header}</h1>
        </Animate>
        <Animate delay={1.1}>
          <p
            dangerouslySetInnerHTML={{
              __html: pricingPageConfig.headerSection.paragraph,
            }}
          />
        </Animate>
      </PricingPageHeader>
      <Spacer times={4} />
      <StyledPricingCards>
        {pricingPageConfig.pricingCards?.map((price, i) => (
          <Animate key={`${i}_${price}`} delay={i * 0.3 + 1.3}>
            <PriceCard data={price} />
          </Animate>
        ))}
      </StyledPricingCards>
      <Spacer times={4} />
      <RegisterSection data={pricingPageConfig.registerBanner} />
      <Spacer times={4} />
      <PoliciesSection data={pricingPageConfig.policy} />
    </StyledPricingPage>
  );
};
