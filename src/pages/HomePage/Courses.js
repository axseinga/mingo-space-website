import React from "react";
import {
    StyledCoursesSection,
    StyledNavLinkCourses,
} from "../styled/HomePage.styled";

export const CoursesSection = ({ data }) => {
    return (
        <StyledCoursesSection bgColor={data?.bgColor}>
            <div>
                <h2>{data?.header}</h2>
                <p>{data?.paragraph}</p>
            </div>
            <div>
                {data?.courses.map((course) => (
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
