import React from "react";
import { StyledPoliciesSection } from "./PoliciesSection.styled";
import { PolicyCard } from "../policyCard/policyCard";
import { Animate } from "../animate/animate";

export const PoliciesSection = ({ data }) => {
  return (
    <StyledPoliciesSection>
      <Animate>
        <h2>Lesson rules &amp; policies</h2>
      </Animate>
      <div>
        {data?.map((policy, i) => (
          <Animate key={policy?.title} delay={i * 0.3 + 1}>
            <PolicyCard data={policy} />
          </Animate>
        ))}
      </div>
    </StyledPoliciesSection>
  );
};
