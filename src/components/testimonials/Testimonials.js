import React from "react";
import { StyledTestimonialsSection } from "./Testimonials.styled";
import { TestimonialCard } from "../testimonialCard/testimonialCard";

export const TestimonialsSection = ({ testimonials }) => {
    return (
        <StyledTestimonialsSection>
            <h2>Testimonials from our students</h2>
            <p>We’re proud of teaching students from around the world.</p>
            <div>
                {testimonials.map((t, i) => (
                    <TestimonialCard
                        key={`${name}_${i}`}
                        name={t.name}
                        img={t.img}
                        flag={t.flag}
                        course={t.course}
                        review={t.review}
                    />
                ))}
            </div>
        </StyledTestimonialsSection>
    );
};
