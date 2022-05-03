import React from "react";
import { StyledHeader } from "./pageHeader.styled";
import { Button } from "../button/Button";

export const Header = ({ header, paragraph, btnText, btnHref, img }) => {
    return (
        <StyledHeader>
            <div>
                <h1>Learn a new language with 1:1 online classes</h1>
                <p>
                    <strong>Mandarin</strong>, <strong>Japanese</strong>, and{" "}
                    <strong>Malay</strong> private classes at an affordable
                    price for both adults and kids.
                </p>
                <Button default big>
                    Register now
                </Button>
            </div>
            <img src="./assets/Pic_Practicelanguageskills1.jpg" />
        </StyledHeader>
    );
};
