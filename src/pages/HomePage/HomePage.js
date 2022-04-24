import React from "react";
import { StyledHomePage } from "../styled/HomePage.styled";
import { Header } from "./Header";
import { CoursesSection } from "./Courses";
import { ClassesSection } from "./Classes";
import { TestimonialsSection } from "./Testimonials";

export const HomePage = () => {
    return (
        <StyledHomePage>
            <Header />
            <CoursesSection />
            <ClassesSection />
            <TestimonialsSection />
        </StyledHomePage>
    );
};
