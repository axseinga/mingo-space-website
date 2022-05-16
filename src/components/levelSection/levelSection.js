import React from "react";
import { StyledLevelSection } from "./levelSection.styled";
import { LevelCard } from "../levelCard/levelCard";

export const LevelSection = () => {
    return (
        <StyledLevelSection>
            <h2>What you’ll learn in our Mandarin classes</h2>
            <p>
                This curriculum overview is just for guidance and can be adapted
                to meet your language needs and interests. After you register,
                we will also conduct a free 15-minute assessment to get to know
                you and determine your language level before your first class.
            </p>
            <div>
                <LevelCard />
            </div>
        </StyledLevelSection>
    );
};
