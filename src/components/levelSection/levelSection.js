import React from "react";
import { StyledLevelSection, LevelCardGroup } from "./levelSection.styled";
import { LevelCard } from "../levelCard/levelCard";
import { Animate } from "../animate/animate";

export const LevelSection = ({ data }) => {
  return (
    <StyledLevelSection>
      <Animate delay={1.1}>
        <h2>{data.header}</h2>
      </Animate>
      <Animate delay={1.2}>
        <p>{data.description}</p>
      </Animate>
      <LevelCardGroup>
        {data.items.map((level, i) => (
          <Animate key={level?.level} delay={i * 0.2 + 1.3}>
            <LevelCard level={level} />
          </Animate>
        ))}
      </LevelCardGroup>
    </StyledLevelSection>
  );
};
