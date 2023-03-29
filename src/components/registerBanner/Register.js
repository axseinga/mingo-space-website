import React from "react";
import {
  StyledRegisterSection,
  StyledRegisterBannerContent,
  StyledNavLinkRegister,
} from "./Register.styled";
import { Button } from "../button/Button";
import { Animate } from "../animate/animate";

export const RegisterSection = ({ data }) => {
  return (
    <StyledRegisterSection isFull={data?.isFull}>
      <Animate>
        <img src={data?.image} />
        <StyledRegisterBannerContent
          isDark={data?.isDark}
          isCenter={data?.isCenter}
        >
          <h2>{data?.header}</h2>
          {data?.subheader && <span>{data?.subheader}</span>}
          <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
          <StyledNavLinkRegister to={"/register"}>
            <Button type="button" default>
              Register now
            </Button>
          </StyledNavLinkRegister>
        </StyledRegisterBannerContent>
      </Animate>
    </StyledRegisterSection>
  );
};
