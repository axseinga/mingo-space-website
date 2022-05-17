import React from "react";
import { StyledPricingPage } from "./styled/PricingPage.styled";
import { Header } from "../components/pageHeader/pageHeader";
import { PriceCard } from "../components/priceCard/priceCard";

export const PricingPage = () => {
    const headerSection = {
        header: "Private Lesson Pricing",
        paragraph: `Our 1:1 Zoom class pricing requires a minimum purchase of at least 5 classes, but <strong>no purchase is needed when signing up.</strong> `,
    };
    const pricingData = [
        {
            header: "Mandarin",
            subheader: "$25",
            content: `USD / <strong>1hr</strong> class`,
        },
        {
            header: "Malay",
            subheader: "$25",
            content: `USD / <strong>1hr</strong> class`,
        },
        {
            header: "Japanese",
            subheader: "$35",
            content: `USD / <strong>1hr</strong> class`,
        },
    ];
    return (
        <StyledPricingPage>
            <Header data={headerSection} />
            {pricingData?.map((price) => (
                <PriceCard data={price} />
            ))}
        </StyledPricingPage>
    );
};
