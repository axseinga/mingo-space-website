import React from "react";
import { StyledLevelCard } from "./levelCard.styled";

export const LevelCard = () => {
    return (
        <StyledLevelCard>
            <h3>Beginner</h3>
            <ul>
                <li>
                    <img src="/assets/icons/bullet-point-green.svg" alt="" />
                    <span>Self-introductions and greetings</span>
                </li>
            </ul>
            <p>
                After the beginner curriculum, you may choose to take the HSK 2
                exam.
            </p>
        </StyledLevelCard>
    );
};
