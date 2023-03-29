import React from "react";
import {
  StyledAboutCourse,
  StyledAboutCourseContent,
} from "./aboutCourse.styled";
import { Animate } from "../animate/animate";

export const AboutCourse = ({ data }) => {
  return (
    <StyledAboutCourse bgColor={data?.bgColor}>
      <Animate variant="slide-left">
        <img src={data?.img} />
      </Animate>
      <Animate variant="skew">
        <StyledAboutCourseContent>
          <h3>{data?.title1}</h3>
          <p>{data?.paragraph1}</p>
          <h3>{data?.title2}</h3>
          <p>{data?.paragraph2}</p>
        </StyledAboutCourseContent>
      </Animate>
    </StyledAboutCourse>
  );
};
