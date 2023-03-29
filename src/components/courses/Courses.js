import React from "react";
import { Animate } from "../animate/animate";
import {
  StyledCoursesSection,
  StyledCoursesHeader,
  StyledCoursesGrid,
  StyledCoursesGridItem,
  StyledNavLinkCourses,
} from "./Courses.styled";

export const CoursesSection = ({ data }) => {
  return (
    <StyledCoursesSection bgColor={data?.bgColor}>
      <StyledCoursesHeader>
        <Animate delay={1}>
          <h2>{data?.header}</h2>
        </Animate>
        <Animate delay={1.2}>
          <p>{data?.paragraph}</p>
        </Animate>
      </StyledCoursesHeader>
      <StyledCoursesGrid>
        {data?.courses.map((course, i) => (
          <Animate key={course.lang} variant={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 0.3 + 1.2}>
            <StyledNavLinkCourses to={course.href}>
              <StyledCoursesGridItem>
                <img src={`./assets/${course.img}`} alt={course.lang} />
                <span>{course.lang}</span>
              </StyledCoursesGridItem>
            </StyledNavLinkCourses>
          </Animate>
        ))}
      </StyledCoursesGrid>
    </StyledCoursesSection>
  );
};
