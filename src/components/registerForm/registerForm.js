import React from "react";
import { StyledRegisterForm } from "./registerForm.styled";
import { Input } from "../form/Input/Input";
import { Textarea } from "../form/textarea/Textarea";
import { Dropdown } from "../form/Dropdown/Dropdown";

export const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <Input name="name" label="Full Name" />
            <Input name="email" label="Email" />
            <Dropdown
                label="Time zone"
                placeholder="Select one"
                options={["option1", "option2"]}
            />
            <Textarea
                name="question"
                label="(Optional) Any questions or comment?"
            />
        </StyledRegisterForm>
    );
};
