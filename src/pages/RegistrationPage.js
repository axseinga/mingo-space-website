import React from "react";
import { StyledRegisterPage } from "./styled/RegisterPage.styled";
import { Header } from "../components/pageHeader/pageHeader";
import { RegisterForm } from "../components/registerForm/registerForm";

export const RegisterPage = () => {
    const headerSection = {
        header: "Course Registration",
        paragraph: `This is a confidential registration form, and we will get back to you within 24 hours.`,
    };
    return (
        <StyledRegisterPage>
            <Header data={headerSection} />
            <RegisterForm></RegisterForm>
        </StyledRegisterPage>
    );
};
