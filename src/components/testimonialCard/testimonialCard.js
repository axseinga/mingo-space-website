import React from "react";
import { StyledTestimonialCard } from "./testimonialCard.styled";

export const TestimonialCard = ({ name, img, flag, course, review }) => {
    return (
        <StyledTestimonialCard>
            <img src={`/assets/${img}`} alt={name} />
            <p className="TestimonialCard-name">{`${name} ${flag}`}</p>
            <p className="TestimonialCard-course">{course}</p>
            <p className="TestimonialCard-review">{review}</p>
        </StyledTestimonialCard>
    );
};
