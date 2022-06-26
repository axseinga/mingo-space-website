import React from "react";
import { StyledInput } from "./Input.styled";

export const Input = ({ name, label }) => {
    return (
        <StyledInput>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} placeholder={label} />
        </StyledInput>
    );
};
