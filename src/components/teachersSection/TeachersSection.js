import React from "react";
import {
  StyledTeachersSection,
  StyledTeachersCards,
} from "./TeachersSection.styled";
import { TeacherCard } from "../teacherCard/TeacherCard";

export const TeachersSection = ({ data }) => {
  return (
    <StyledTeachersSection>
      <h2>{data.header}</h2>
      <p>{data.description}</p>
      <StyledTeachersCards>
        {data.items.map((teacher) => (
          <TeacherCard key={teacher.name} teacher={teacher} />
        ))}
      </StyledTeachersCards>
    </StyledTeachersSection>
  );
};
