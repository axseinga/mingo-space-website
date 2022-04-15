import React from "react";
import { StyledButton } from "./Button.styled";

export const Button = ({ type, children, onClick, ...props }) => {
    return (
        <StyledButton type={type} onClick={onClick} {...props}>
            {children ? <div>{children}</div> : null}
        </StyledButton>
    );
};
