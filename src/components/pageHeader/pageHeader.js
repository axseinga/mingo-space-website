import React from "react";
import { StyledHeader, StyledHeaderFeatureBox } from "./pageHeader.styled";
import { Button } from "../button/Button";

export const Header = ({ data }) => {
    return (
        <StyledHeader>
            <div>
                <h1>{data?.header}</h1>
                <p dangerouslySetInnerHTML={{ __html: data?.paragraph }}></p>
                {data?.features && (
                    <StyledHeaderFeatureBox>
                        {" "}
                        {data?.features.map((feature) => (
                            <span>{feature}</span>
                        ))}{" "}
                    </StyledHeaderFeatureBox>
                )}
                <Button default big>
                    {data?.btnText}
                </Button>
            </div>
            <img src={data?.img} />
        </StyledHeader>
    );
};
