import React from "react";
import { StyledRegisterForm } from "./registerForm.styled";
import { Input } from "../form/Input/Input";
import { Textarea } from "../form/textarea/Textarea";
import { DropdownWithInput } from "../form/dropdownWithInput/DropdownWithInput";
import { Dropdown } from "../form/Dropdown/Dropdown";

export const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <Input name="name" label="Full Name" />
            <Input name="email" label="Email" />
            <DropdownWithInput
                dropdownName="prefix"
                dropdownPlaceholder={{
                    name: "Poland",
                    code: "POL",
                    prefix: "+48",
                }}
                dropdownOptions={[
                    { name: "Sweden", code: "SWE", prefix: "+46" },
                    { name: "Germany", code: "DEU", prefix: "+49" },
                    { name: "Poland", code: "POL", prefix: "+48" },
                ]}
                inputName="phone"
                inputLabel="Phone Number"
            />
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
