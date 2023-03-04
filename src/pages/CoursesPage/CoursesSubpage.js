import React from "react";
import { Header } from "../../components/pageHeader/pageHeader";
import { AboutCourse } from "../../components/aboutCourse/aboutCourse";
import { TeachersSection } from "../../components/teachersSection/TeachersSection";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { RegisterSection } from "../../components/registerBanner/Register";
import { StyledCoursesSubpage } from "./CoursesPage.styled";
import { LevelSection } from "../../components/levelSection/levelSection";
import { coursesSubpagesConfig } from "../../@config/config";

export const CoursesSubpage = () => {
  const language = coursesSubpagesConfig.mandarin;
  return (
    <StyledCoursesSubpage>
      <Header data={language.header} />
      <AboutCourse data={language.about} />
      <TeachersSection data={language.teachers} />
      <LevelSection />
      <RegisterSection data={language.buyCourses} />
      <TestimonialsSection data={language.testimonials} />
      <RegisterSection data={language.registerBanner} />
    </StyledCoursesSubpage>
  );
};
