import React from "react";
import { StyledHomePage } from "./HomePage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { CoursesSection } from "../../components/courses/Courses";
import { ClassesSection } from "../../components/classesSection/classesSection";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { FAQ } from "../../components/faq/FAQ";
import { RegisterSection } from "../../components/registerBanner/Register";
import { homepageConfig } from "../../@config/config";
import { Spacer } from "../../styles/elements";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header data={homepageConfig.headerSection} />
      <Spacer times={5}/>
      <CoursesSection data={homepageConfig.coursesSection} />
      <Spacer times={5}/>
      <ClassesSection data={homepageConfig.classesSection} />
      <Spacer times={5}/>
      <TestimonialsSection
        data={homepageConfig.testimonialsSection.testimonials}
      />
      <Spacer times={5}/>
      <FAQ data={homepageConfig.faq.questions} />
      <RegisterSection data={homepageConfig.registerBannerData} />
    </StyledHomePage>
  );
};
