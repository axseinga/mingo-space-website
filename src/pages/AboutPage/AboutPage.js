import React from "react";
import { FAQ } from "../../components/faq/FAQ";
import { TeachersSection } from "../../components/teachersSection/TeachersSection";
import { StyledAboutPage } from "./AboutPage.styled";
import { coursesSubpagesConfig } from "../../@config/config";
import { homepageConfig } from "../../@config/config";
import { Spacer } from "../../styles/elements";

export const AboutPage = () => {
  return (
    <StyledAboutPage>
      <Spacer times={4} />
      <TeachersSection data={coursesSubpagesConfig.mandarin.teachers} />
      <Spacer times={4} />
      <FAQ data={homepageConfig.faq.questions} />
    </StyledAboutPage>
  );
};
