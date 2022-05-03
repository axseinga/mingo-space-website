import React from "react";
import { StyledHeader } from "./pageHeader.styled";
import { Button } from "../button/Button";

export const Header = ({ data }) => {
    return (
        <StyledHeader>
            <div>
                <h1>{data?.header}</h1>
                <p dangerouslySetInnerHTML={{ __html: data?.paragraph }}></p>
                <Button default big>
                    {data?.btnText}
                </Button>
            </div>
            <img src={data?.img} />
        </StyledHeader>
    );
};
