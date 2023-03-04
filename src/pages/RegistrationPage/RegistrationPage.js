import React from "react";
import { StyledRegistrationPage } from "./RegistrationPage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { RegisterForm } from "../../components/registerForm/registerForm";
import { registrationPageConfig } from "../../@config/config";

export const RegistrationPage = () => {
  return (
    <StyledRegistrationPage>
      <Header data={registrationPageConfig.headerSection} />
      <RegisterForm />
    </StyledRegistrationPage>
  );
};
