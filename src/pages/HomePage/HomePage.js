import React from "react";
import { StyledHomePage } from "../styled/HomePage.styled";
import { Header } from "./Header";
import { CoursesSection } from "./Courses";
import { ClassesSection } from "./Classes";
import { TestimonialsSection } from "./Testimonials";
import { FAQ } from "./FAQ";
import { RegisterSection } from "./Register";
import { theme } from "../../styles/theme";

export const HomePage = () => {
    const courses = [
        {
            lang: "Mandarin",
            href: "/courses/mandarin",
            img: "Pic_MandarinCourseCARD.jpg",
        },
        {
            lang: "Japanese",
            href: "/courses/japanese",
            img: "Pic_Japanese_Course_CARD.jpg",
        },
        {
            lang: "Malay",
            href: "/courses/malay",
            img: "Pic_MalayCourseCARD.jpg",
        },
        {
            lang: "Kids Course",
            href: "/courses/kidscourse",
            img: "Pic_KidsCourseCARD.jpg",
        },
    ];

    const header = "Language courses we offer";

    const text =
        "We offer private language courses for both adults and kids. Our prices start at $25/1hr class.";

    return (
        <StyledHomePage>
            <Header />
            <CoursesSection
                header={header}
                text={text}
                courses={courses}
                bgColor={theme.color.bg}
            />
            <ClassesSection />
            <TestimonialsSection />
            <FAQ />
            <RegisterSection />
        </StyledHomePage>
    );
};
