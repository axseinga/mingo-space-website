import React from "react";
import { StyledFAQSection } from "./FAQ.styled";
import { Accordion } from "../accordion/Accordion";
import { Animate } from "../animate/animate";

export const FAQ = ({ data }) => {
  return (
    <StyledFAQSection>
      <Animate>
        <h2>FAQs</h2>
        {data.map((pair, i) => (
          <Accordion key={i} question={pair.question} answer={pair.answer} />
        ))}
      </Animate>
    </StyledFAQSection>
  );
};
