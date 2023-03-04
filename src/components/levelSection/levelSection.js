import React from "react";
import { StyledLevelSection } from "./levelSection.styled";
import { LevelCard } from "../levelCard/levelCard";

export const LevelSection = ({ data }) => {
  return (
    <StyledLevelSection>
      <h2>{data.header}</h2>
      <p>{data.description}</p>
      <div>
        {data.items.map((level) => (
          <LevelCard key={level?.level} level={level} />
        ))}
      </div>
    </StyledLevelSection>
  );
};
