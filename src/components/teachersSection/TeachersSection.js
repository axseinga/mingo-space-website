import React from "react";
import {
    StyledTeachersSection,
    StyledTeachersCards,
} from "./TeachersSection.styled";
import { TeacherCard } from "../teacherCard/TeacherCard";

export const TeacherSection = ({ teachersData }) => {
    return (
        <StyledTeachersSection>
            <h2>Meet our Mandarin teachers</h2>
            <p>
                All of our teachers highly vetted and have years of experience
                teaching Mandarin to English speakers. After you register, we
                will email you to choose from the teachers that best match your
                availabilities.{" "}
            </p>
            <StyledTeachersCards>
                {teachersData.map((teacher) => (
                    <TeacherCard key={teacher.name} teacher={teacher} />
                ))}
            </StyledTeachersCards>
        </StyledTeachersSection>
    );
};
