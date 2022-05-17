import React from "react";
import { StyledPricingPage } from "./styled/PricingPage.styled";
import { Header } from "../components/pageHeader/pageHeader";
import { PriceCard } from "../components/priceCard/priceCard";
import { RegisterSection } from "../components/registerBanner/Register";

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
    const registerBannerData = {
        image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
        header: "Looking for kid-friendly classes?",
        subheader: "$15",
        content: `USD / <strong>30min</strong> class <br/>
        Mandarin, Malay, or Japanese`,
        isDark: true,
        isCenter: true,
        isFull: false,
    };
    return (
        <StyledPricingPage>
            <Header data={headerSection} />
            {pricingData?.map((price) => (
                <PriceCard data={price} />
            ))}
            <RegisterSection data={registerBannerData} />
        </StyledPricingPage>
    );
};
