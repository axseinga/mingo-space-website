import React from "react";
import {
  StyledTeachersSection,
  StyledTeachersCards,
} from "./TeachersSection.styled";
import { TeacherCard } from "../teacherCard/TeacherCard";
import { Animate } from "../animate/animate";

export const TeachersSection = ({ data }) => {
  return (
    <StyledTeachersSection>
      <Animate delay={1.1}>
      <h2>{data.header}</h2>
      </Animate>
      <Animate delay={1.2}>
      <p>{data.description}</p>
      </Animate>
      <StyledTeachersCards>
        {data.items.map((teacher, i) => (
          <Animate key={teacher.name} variant={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 0.3 + 1.3}>
          <TeacherCard teacher={teacher} />
          </Animate>
        ))}
      </StyledTeachersCards>
    </StyledTeachersSection>
  );
};
