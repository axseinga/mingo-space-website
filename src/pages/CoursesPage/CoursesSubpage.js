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

export const CoursesSubpage = ({language}) => {
  const lang = coursesSubpagesConfig[language];
  return (
    <StyledCoursesSubpage>
      <Header data={lang.header} />
      <Spacer times={4}/>
      <AboutCourse data={lang.about} />
      <Spacer times={4}/>
      <TeachersSection data={lang.teachers} />
      <Spacer times={4}/>
      <LevelSection data={lang.levels}/>
      <Spacer times={4}/>
      <RegisterSection data={lang.buyCourses} />
      <Spacer times={6}/>
      <TestimonialsSection data={lang.testimonials} />
      <Spacer times={6}/>
      <RegisterSection data={lang.registerBanner} />
    </StyledCoursesSubpage>
  );
};
