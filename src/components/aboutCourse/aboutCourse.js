import React from "react";
import {
    StyledAboutCourse,
    StyledAboutCourseContent,
} from "./aboutCourse.styled";

export const AboutCourse = ({ data }) => {
    return (
        <StyledAboutCourse bgColor={data?.bgColor}>
            <StyledAboutCourseContent>
                <h3>{data?.title1}</h3>
                <p>{data?.paragraph1}</p>
                <h3>{data?.title2}</h3>
                <p>{data?.paragraph2}</p>
            </StyledAboutCourseContent>
            <img src={data?.img} />
        </StyledAboutCourse>
    );
};
