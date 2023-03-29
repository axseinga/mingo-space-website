import React, { useState } from "react";
import { StyledAccordion } from "./Accordion.styled";

export const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <StyledAccordion show={show}>
      <div>
        <p>{question}</p>
        <button type="button" onClick={() => setShow(!show)}>
          <img
            src={`/assets/icons/icon_faq_plus${show ? "" : "2"}.png`}
            alt="Show answer"
          />
        </button>
      </div>
      <p>{answer}</p>
    </StyledAccordion>
  );
};
