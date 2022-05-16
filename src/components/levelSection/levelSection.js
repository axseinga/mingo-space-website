import React from "react";
import { StyledLevelSection } from "./levelSection.styled";
import { LevelCard } from "../levelCard/levelCard";

export const LevelSection = () => {
    const levelsData = [
        {
            level: "Beginner",
            points: [
                { text: "Self-introductions and greetings", isActive: true },
                { text: "Discuss daily topics", isActive: true },
                { text: "Read and comprehend passages", isActive: false },
                { text: "Talk about the past and future", isActive: false },
                { text: "Chinese idioms and culture", isActive: false },
                { text: "Speak Chinese fluently", isActive: false },
            ],
            footer: `After the beginner curriculum, you may choose to take the <span> HSK 2 exam.</span>`,
        },
        {
            level: "Intermediate",
            points: [
                { text: "Self-introductions and greetings", isActive: true },
                { text: "Discuss daily topics", isActive: true },
                { text: "Read and comprehend passages", isActive: true },
                { text: "Talk about the past and future", isActive: true },
                { text: "Chinese idioms and culture", isActive: false },
                { text: "Speak Chinese fluently", isActive: false },
            ],
            footer: `After the beginner curriculum, you may choose to take the <span> HSK 4 exam.</span>`,
        },
        {
            level: "Advanced",
            points: [
                { text: "Self-introductions and greetings", isActive: true },
                { text: "Discuss daily topics", isActive: true },
                { text: "Read and comprehend passages", isActive: true },
                { text: "Talk about the past and future", isActive: true },
                { text: "Chinese idioms and culture", isActive: true },
                { text: "Speak Chinese fluently", isActive: true },
            ],
            footer: `After the beginner curriculum, you may choose to take the <span> HSK 6 exam.</span>`,
        },
    ];
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
                {levelsData?.map((level) => (
                    <LevelCard key={level?.level} level={level} />
                ))}
            </div>
        </StyledLevelSection>
    );
};
