import React from "react";
import { StyledHomePage } from "../styled/HomePage.styled";
import { Header } from "./Header";
import { CoursesSection } from "./Courses";

export const HomePage = () => {
    return (
        <StyledHomePage>
            <Header />
            <CoursesSection />
        </StyledHomePage>
    );
};
