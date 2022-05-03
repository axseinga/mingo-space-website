import React from "react";
import {
    StyledCoursesSection,
    StyledNavLinkCourses,
} from "../styled/HomePage.styled";

export const CoursesSection = ({ header, text, courses, bgColor }) => {
    return (
        <StyledCoursesSection bgColor={bgColor}>
            <div>
                <h2>{header}</h2>
                <p>{text}</p>
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
