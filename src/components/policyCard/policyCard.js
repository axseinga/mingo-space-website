import React from "react";
import { StyledPolicyCard } from "./policyCard.styled";

export const PolicyCard = ({ data }) => {
    return (
        <StyledPolicyCard>
            <img src={data?.icon} alt="" />
            <h3>{data?.title}</h3>
            <p> {data?.content}</p>
        </StyledPolicyCard>
    );
};
