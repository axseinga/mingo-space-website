import React from "react";
import { StyledHeader, StyledHeaderFeatureBox } from "./pageHeader.styled";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import { Animate } from "../animate/animate";

export const Header = ({ data }) => {
  return (
    <StyledHeader>
      <Animate variant="slide-left">
        <h1>{data?.header}</h1>
        {data?.features && (
          <StyledHeaderFeatureBox>
            {" "}
            {data?.features.map((feature, i) => (
              <span key={i}>{feature}</span>
            ))}{" "}
          </StyledHeaderFeatureBox>
        )}
        <p dangerouslySetInnerHTML={{ __html: data?.paragraph }}></p>
        {data?.btnText && (
          <Button default big>
            <Link to="/register">{data?.btnText}</Link>
          </Button>
        )}
      </Animate>
      <Animate variant="slide-right">
        {data?.img && <img src={data?.img} />}
      </Animate>
    </StyledHeader>
  );
};
