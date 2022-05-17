import React from "react";
import { StyledPoliciesSection } from "./PoliciesSection.styled";
import { PolicyCard } from "../policyCard/policyCard";

export const PoliciesSection = ({ data }) => {
    return (
        <StyledPoliciesSection>
            <h2>Lesson rules &amp; policies</h2>
            <div>
                {data?.map((policy) => (
                    <PolicyCard key={policy?.title} data={policy} />
                ))}
            </div>
        </StyledPoliciesSection>
    );
};
