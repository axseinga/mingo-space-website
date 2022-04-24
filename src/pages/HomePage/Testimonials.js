import React from "react";
import { StyledTestimonialsSection } from "../styled/HomePage.styled";
import { TestimonialCard } from "../../components/testimonialCard/testimonialCard";

export const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Trina",
            img: "Pic_Testimonial1Propic.png",
            flag: "🇨🇦",
            course: "Japanese Course",
            review: "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
        },
        {
            name: "Kyle",
            img: "Pic_Testimonial2Propic.png",
            flag: "🇬🇧",
            course: "Mandarin Course",
            review: "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
        },
        {
            name: "Thera",
            img: "Pic_Testimonial3Propic.png",
            flag: "🇮🇩",
            course: "Malay Course",
            review: "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
        },
        {
            name: "Joseph",
            img: "Pic_Testimonial4Propic.png",
            flag: "🇦🇪",
            course: "Japanese Course",
            review: "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
        },
    ];
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
