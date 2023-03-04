import React from "react";
import { StyledChoiceInput, StyledOption } from "./ChoiceInput.styled";

export const ChoiceInput = ({ type, label, options }) => {
  return (
    <StyledChoiceInput>
      <p>{label}</p>
      <div>
        {options?.map((o) => (
          <StyledOption key={o}>
            <input type={type} id={o} name={o} value={o} />
            <label htmlFor={o}>{o}</label>
          </StyledOption>
        ))}
      </div>
    </StyledChoiceInput>
  );
};
