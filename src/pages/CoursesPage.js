import React from "react";
import { StyledCoursesPage } from "./styled/CoursesPage.styled";
import { CoursesSection } from "./HomePage/Courses";

export const CoursesPage = () => {
    const coursesSection = {
        header: "All Courses",
        paragraph:
            "We offer 1:1 online language courses for Mandarin, Japanese, or Malay. Our teachers create personalized lesson plans to meet your needs and interests with dynamic classes to practice your speaking, listening, writing, and reading skills. ",
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
    };
    return (
        <StyledCoursesPage>
            <CoursesSection data={coursesSection} />
        </StyledCoursesPage>
    );
};
