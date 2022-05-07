import React from "react";
import {
    StyledRegisterSection,
    StyledNavLinkRegister,
} from "./Register.styled";
import { Button } from "../button/Button";

export const RegisterSection = () => {
    return (
        <StyledRegisterSection>
            <img src={"/assets/Pic_ReadytoRegisterCard.jpg"} />
            <div>
                <h2>Ready to register?</h2>
                <p>No payment required now.</p>
                <StyledNavLinkRegister to={"/register"}>
                    <Button type="button" default>
                        Register now
                    </Button>
                </StyledNavLinkRegister>
            </div>
        </StyledRegisterSection>
    );
};
