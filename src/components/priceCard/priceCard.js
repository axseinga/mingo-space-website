import React from "react";
import { StyledPriceCard, StyledNavLinkPrice } from "./priceCard.styled";
import { Button } from "../button/Button";

export const PriceCard = ({ data }) => {
  return (
    <StyledPriceCard>
      <h2>{data?.header}</h2>
      <span>{data?.subheader && data?.subheader}</span>
      <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
      <StyledNavLinkPrice to={"/register"}>
        <Button type="button" default>
          Register now
        </Button>
      </StyledNavLinkPrice>
    </StyledPriceCard>
  );
};
