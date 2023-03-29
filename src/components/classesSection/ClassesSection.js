import React from "react";
import {
  StyledClassesSection,
  StyledClassesItems,
  StyledClassesItem,
  StyledClassesContent,
} from "./ClassesSection.styled";
import { Animate } from "../animate/animate";

export const ClassesSection = ({ data }) => {
  const classes = data.classes;
  return (
    <StyledClassesSection>
      <h2>{data.header}</h2>
      <StyledClassesItems>
        {classes.map((cl, i) => (
          <StyledClassesItem key={`${i}_${cl}`}>
            <StyledClassesContent>
              <Animate variant="skew">
              <h3>{cl.title}</h3>
              <p>{cl.paragraph}</p>
              </Animate>
            </StyledClassesContent>
            <img src={`./assets/${cl.img}`} />
          </StyledClassesItem>
        ))}
      </StyledClassesItems>
    </StyledClassesSection>
  );
};
