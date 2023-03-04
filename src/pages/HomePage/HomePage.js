import React from "react";
import { StyledHomePage } from "./HomePage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { CoursesSection } from "../../components/courses/Courses";
import { ClassesSection } from "../../components/classesSection/classesSection";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { FAQ } from "../../components/faq/FAQ";
import { RegisterSection } from "../../components/registerBanner/Register";
import { homepageConfig } from "../../@config/config";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header data={homepageConfig.headerSection} />
      <CoursesSection data={homepageConfig.coursesSection} />
      <ClassesSection data={homepageConfig.classesSection} />
      <TestimonialsSection
        data={homepageConfig.testimonialsSection.testimonials}
      />
      <FAQ data={homepageConfig.faq.questions} />
      <RegisterSection data={homepageConfig.registerBannerData} />
    </StyledHomePage>
  );
};
