import React from "react";
import {
  StyledTestimonialCard,
  TestimonialCardCourse,
  TestimonialCardName,
  TestimonialCardReview,
} from "./testimonialCard.styled";

export const TestimonialCard = ({ name, img, flag, course, review }) => {
  return (
    <StyledTestimonialCard>
      <img src={`/assets/${img}`} alt={name} />
      <TestimonialCardName>{`${name} ${flag}`}</TestimonialCardName>
      <TestimonialCardCourse>{course}</TestimonialCardCourse>
      <TestimonialCardReview>{review}</TestimonialCardReview>
    </StyledTestimonialCard>
  );
};
