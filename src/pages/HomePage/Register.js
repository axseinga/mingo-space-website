import React from "react";
import {
    StyledRegisterSection,
    StyledNavLinkRegister,
} from "../styled/HomePage.styled";
import { Button } from "../../components/button/Button";

export const RegisterSection = () => {
    return (
        <StyledRegisterSection>
            <h2>Ready to register?</h2>
            <p>No payment required now.</p>
            <StyledNavLinkRegister to={"/register"}>
                <Button type="button" default>
                    Register now
                </Button>
            </StyledNavLinkRegister>
        </StyledRegisterSection>
    );
};
