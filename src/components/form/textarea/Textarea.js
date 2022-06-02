import React from "react";
import { StyledTextarea } from "./Textarea.styled";

export const Textarea = ({ name, label }) => {
    return (
        <StyledTextarea>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} name={name} placeholder={label} />
        </StyledTextarea>
    );
};
