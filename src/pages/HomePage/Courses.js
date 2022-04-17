import React from "react";
import {
    StyledCoursesSection,
    StyledNavLinkCourses,
} from "../styled/HomePage.styled";

export const CoursesSection = () => {
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
    return (
        <StyledCoursesSection>
            <div>
                <h2>Language courses we offer</h2>
                <p>
                    We offer private language courses for both adults and kids.
                    Our prices start at $25/1hr class.
                </p>
            </div>
            <div>
                {courses.map((course) => (
                    <StyledNavLinkCourses to={course.href} key={course.lang}>
                        <div>
                            <img
                                src={`./assets/${course.img}`}
                                alt={course.lang}
                            />
                            <span>{course.lang}</span>
                        </div>
                    </StyledNavLinkCourses>
                ))}
            </div>
        </StyledCoursesSection>
    );
};
