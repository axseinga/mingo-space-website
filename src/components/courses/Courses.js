import React from "react";
import {
    StyledCoursesSection,
    StyledCoursesHeader,
    StyledCoursesGrid,
    StyledCoursesGridItem,
    StyledNavLinkCourses,
} from "./Courses.styled";

export const CoursesSection = ({ data }) => {
    return (
        <StyledCoursesSection bgColor={data?.bgColor}>
            <StyledCoursesHeader>
                <h2>{data?.header}</h2>
                <p>{data?.paragraph}</p>
            </StyledCoursesHeader>
            <StyledCoursesGrid>
                {data?.courses.map((course) => (
                    <StyledNavLinkCourses to={course.href} key={course.lang}>
                        <StyledCoursesGridItem>
                            <img
                                src={`./assets/${course.img}`}
                                alt={course.lang}
                            />
                            <span>{course.lang}</span>
                        </StyledCoursesGridItem>
                    </StyledNavLinkCourses>
                ))}
            </StyledCoursesGrid>
        </StyledCoursesSection>
    );
};
