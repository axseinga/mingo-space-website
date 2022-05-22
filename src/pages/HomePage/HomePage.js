import React from "react";
import { StyledHomePage } from "../styled/HomePage.styled";
import { Header } from "../../components/pageHeader/pageHeader";
import { CoursesSection } from "../../components/courses/Courses";
import { ClassesSection } from "./Classes";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { FAQ } from "./FAQ";
import { RegisterSection } from "../../components/registerBanner/Register";
import { theme } from "../../styles/theme";

export const HomePage = () => {
    const headerSection = {
        header: "Learn a new language with 1:1 online classes",
        paragraph: `<strong>Mandarin</strong>, <strong>Japanese</strong>, and <strong>Malay</strong> private classes at an affordable
    price for both adults and kids.`,
        btnText: "Register now",
        btnHref: "/register",
        img: "./assets/Hero_Image_Zoom_call.png",
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

    const testimonialsSection = [
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
    const registerBannerData = {
        image: "/assets/Pic_ReadytoRegisterCard.jpg",
        header: "Ready to register?",
        content: "No payment required now.",
        isDark: true,
        center: true,
        isFull: false,
        isLeft: true,
    };

    return (
        <StyledHomePage>
            <Header data={headerSection} />
            <CoursesSection data={coursesSection} />
            <ClassesSection />
            <TestimonialsSection testimonials={testimonialsSection} />
            <FAQ />
            <RegisterSection data={registerBannerData} />
        </StyledHomePage>
    );
};
