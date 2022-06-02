import React from "react";
import { StyledRegisterForm } from "./registerForm.styled";
import { Input } from "../form/Input/Input";

export const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <Input name="name" label="Full Name" />
            <Input name="email" label="Email" />
        </StyledRegisterForm>
    );
};
