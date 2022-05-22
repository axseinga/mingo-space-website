import React from "react";
import {
    StyledRegisterSection,
    StyledNavLinkRegister,
} from "./Register.styled";
import { Button } from "../button/Button";

export const RegisterSection = ({ data }) => {
    return (
        <StyledRegisterSection
            isDark={data?.isDark}
            isCenter={data?.isCenter}
            isFull={data?.isFull}
            isLeft={data?.isLeft}
        >
            <img src={data?.image} />
            <div>
                <h2>{data?.header}</h2>
                {data?.subheader && <span>{data?.subheader}</span>}
                <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
                <StyledNavLinkRegister to={"/register"}>
                    <Button type="button" default>
                        Register now
                    </Button>
                </StyledNavLinkRegister>
            </div>
        </StyledRegisterSection>
    );
};
