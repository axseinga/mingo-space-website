import React from "react";
import { StyledPricingPage } from "./styled/PricingPage.styled";
import { Header } from "../components/pageHeader/pageHeader";
import { PriceCard } from "../components/priceCard/priceCard";
import { RegisterSection } from "../components/registerBanner/Register";
import { PoliciesSection } from "../components/policiesSection/PoliciesSection";

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
    const policiesData = [
        {
            icon: "/assets/icons/icon_payment_method.png",
            title: "Payment Method",
            content:
                "We accept PayPal, debit, credit card (includes 3% surcharge). Bank transfer within Malaysia and Singapore is also accepted and excludes surcharge.",
        },
        {
            icon: "/assets/icons/icon_reservation.png",
            title: "Reservations",
            content:
                "Classes will be scheduled based on student and teacher availabilities. We have teachers that can accomodate for all time zones, 7 days a week.",
        },
        {
            icon: "/assets/icons/icon_refunds.png",
            title: "Cancellations & Refunds",
            content:
                "Please contact us at least one day before your lesson if you need to cancel. If cancelled less than 24 hours before, lesson fees will not be refunded.",
        },
    ];
    return (
        <StyledPricingPage>
            <Header data={headerSection} />
            {pricingData?.map((price) => (
                <PriceCard data={price} />
            ))}
            <RegisterSection data={registerBannerData} />
            <PoliciesSection data={policiesData} />
        </StyledPricingPage>
    );
};
