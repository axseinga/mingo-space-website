import React from "react";
import { StyledLevelCard } from "./levelCard.styled";

export const LevelCard = ({ level }) => {
    return (
        <StyledLevelCard>
            <h3>{level?.level}</h3>
            <ul>
                {level?.points.map((point) => (
                    <li key={point.level}>
                        <img
                            src={`/assets/icons/bullet-point-${
                                point?.isActive ? "green" : "grey"
                            }.svg`}
                            alt=""
                        />
                        <span>{point?.text}</span>
                    </li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: level?.footer }}></p>
        </StyledLevelCard>
    );
};
