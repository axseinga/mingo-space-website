import React from "react";
import { StyledRegisterForm, RowWrapper } from "./registerForm.styled";
import { Input } from "../form/Input/Input";
import { Textarea } from "../form/textarea/Textarea";
import { DropdownWithInput } from "../form/dropdownWithInput/DropdownWithInput";
import { Dropdown } from "../form/Dropdown/Dropdown";
import { ChoiceInput } from "../form/ChoiceInput/ChoiceInput";
import { CalendarInput } from "../form/CalendarInput/CalendarInput";
import { Button } from "../button/Button";

export const RegisterForm = () => {
    return (
        <StyledRegisterForm>
            <Input name="name" label="Full Name" />
            <RowWrapper>
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
            </RowWrapper>
            <ChoiceInput
                type="checkbox"
                label={"Which language(s) would you like to take?"}
                options={["Mandarin", "Japanese", "Malay"]}
            />
            <ChoiceInput
                type="checkbox"
                label={"Adult or kid class?"}
                options={["Adult", "Kid"]}
            />
            <Dropdown
                label="Time zone"
                placeholder="Select one"
                options={[
                    "+00:00 (GMT) Western Europe Time, London, Lisbon, Casablanca",
                    "+08:00 (GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
                ]}
            />
            <CalendarInput
                label="Days available"
                options={["M", "Tu", "W", "Th", "F", "Sa", "Su"]}
            />
            <Textarea
                name="question"
                label="(Optional) Any questions or comment?"
            />
            <Button type="submit" default>
                Submit
            </Button>
        </StyledRegisterForm>
    );
};
