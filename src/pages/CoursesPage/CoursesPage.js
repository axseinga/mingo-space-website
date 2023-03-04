import React from "react";
import { StyledCoursesPage } from "./CoursesPage.styled";
import { CoursesSection } from "../../components/courses/Courses";
import { coursesPageConfig } from "../../@config/config";

export const CoursesPage = () => {
  return (
    <StyledCoursesPage>
      <CoursesSection data={coursesPageConfig} />
    </StyledCoursesPage>
  );
};
