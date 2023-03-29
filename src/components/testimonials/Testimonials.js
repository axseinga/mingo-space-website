import React from "react";
import { StyledTestimonialsSection, TestimonialsGroup } from "./Testimonials.styled";
import { TestimonialCard } from "../testimonialCard/testimonialCard";
import { Animate } from "../animate/animate";

export const TestimonialsSection = ({ data }) => {
  return (
    <StyledTestimonialsSection>
      <Animate>
      <h2>Testimonials from our students</h2>
      </Animate>
      <Animate delay={1.2}>
      <p>We’re proud of teaching students from around the world.</p>
      </Animate>
      <TestimonialsGroup>
        {data.map((t, i) => (
          <Animate key={i} delay={i * 0.5 + 1.3}>
          <TestimonialCard
            name={t.name}
            img={t.img}
            flag={t.flag}
            course={t.course}
            review={t.review}
          />
          </Animate>
        ))}
      </TestimonialsGroup>
    </StyledTestimonialsSection>
  );
};
