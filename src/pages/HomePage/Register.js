import React from "react";
import { StyledRegisterSection } from "../styled/HomePage.styled";
import { Button } from "../../components/button/Button";

export const RegisterSection = () => {
    return (
        <StyledRegisterSection>
            <h2>Ready to register?</h2>
            <p>No payment required now.</p>
            <Button
                type="button"
                default
                onClick={() => console.log("clicked btn")}
            >
                Register now
            </Button>
        </StyledRegisterSection>
    );
};
