import React from "react";
import { StyledHomePage } from "../styled/HomePage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { CoursesSection } from "../../components/courses/Courses";
import { ClassesSection } from "./Classes";
import { TestimonialsSection } from "./Testimonials";
import { FAQ } from "./FAQ";
import { RegisterSection } from "./Register";
import { theme } from "../../styles/theme";

export const HomePage = () => {
    const headerSection = {
        header: "Learn a new language with 1:1 online classes",
        paragraph: `<strong>Mandarin</strong>, <strong>Japanese</strong>, and <strong>Malay</strong> private classes at an affordable
    price for both adults and kids.`,
        btnText: "Register now",
        btnHref: "/register",
        img: "./assets/Pic_Practicelanguageskills1.jpg",
    };

    const coursesSection = {
        header: "Language courses we offer",
        paragraph:
            "We offer private language courses for both adults and kids. Our prices start at $25/1hr class.",
        courses: [
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
        ],
        bgColor: theme.color.bg,
    };

    return (
        <StyledHomePage>
            <Header data={headerSection} />
            <CoursesSection data={coursesSection} />
            <ClassesSection />
            <TestimonialsSection />
            <FAQ />
            <RegisterSection />
        </StyledHomePage>
    );
};
