import React from "react";
import { StyledTeacherCard, StyledLanguages } from "./TeacherCard.styled";

export const TeacherCard = ({ teacher }) => {
  return (
    <StyledTeacherCard>
      <img src={teacher?.img} alt={teacher?.name} />
      <div>
        <h3>{teacher?.name}</h3>
        <p>{teacher?.about}</p>
        <StyledLanguages>
          <p>Speaks: </p>
          {teacher?.langs.map((lang, i) => (
            <span key={i}>{lang}</span>
          ))}{" "}
        </StyledLanguages>
      </div>
    </StyledTeacherCard>
  );
};
