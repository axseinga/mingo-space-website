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
                        {data?.features.map((feature, i) => (
                            <span key={i}>{feature}</span>
                        ))}{" "}
                    </StyledHeaderFeatureBox>
                )}
                {data?.btnText && (
                    <Button default big>
                        {data?.btnText}
                    </Button>
                )}
            </div>
            {data?.img && <img src={data?.img} />}
        </StyledHeader>
    );
};
