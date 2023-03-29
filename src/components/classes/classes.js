import React from "react";
import {
  StyledClassesSection,
  StyledClassesItems,
  StyledClassesItem,
  StyledClassesContent,
} from "./classes.styled";
import { Animate } from "../animate/animate";

export const ClassesSection = ({ data }) => {
  const classes = data.classes;
  return (
    <StyledClassesSection>
      <Animate>
        <h2>{data.header}</h2>
      </Animate>
      <StyledClassesItems>
        {classes.map((cl, i) => (
          <Animate variant="skew" key={`${i}_${cl}`} delay={i * 0.3 + 1}>
            <StyledClassesItem>
              <StyledClassesContent>
                <h3>{cl.title}</h3>
                <p>{cl.paragraph}</p>
              </StyledClassesContent>
              <img src={`./assets/${cl.img}`} />
            </StyledClassesItem>
          </Animate>
        ))}
      </StyledClassesItems>
    </StyledClassesSection>
  );
};
