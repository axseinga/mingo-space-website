import React from "react";
import { Header } from "../../components/pageHeader/pageHeader";
import { AboutCourse } from "../../components/aboutCourse/aboutCourse";
import { TeachersSection } from "../../components/teachersSection/TeachersSection";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { RegisterSection } from "../../components/registerBanner/Register";
import { StyledCoursesSubpage } from "./CoursesPage.styled";
import { LevelSection } from "../../components/levelSection/levelSection";
import { coursesSubpagesConfig } from "../../@config/config";
import { Spacer } from "../../styles/elements";

export const CoursesSubpage = () => {
  const language = coursesSubpagesConfig.mandarin;
  return (
    <StyledCoursesSubpage>
      <Header data={language.header} />
      <AboutCourse data={language.about} />
      <TeachersSection data={language.teachers} />
      <LevelSection data={language.levels}/>
      <Spacer times={4}/>
      <RegisterSection data={language.buyCourses} />
      <Spacer times={6}/>
      <TestimonialsSection data={language.testimonials} />
      <Spacer times={6}/>
      <RegisterSection data={language.registerBanner} />
    </StyledCoursesSubpage>
  );
};
