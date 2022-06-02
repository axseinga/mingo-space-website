import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { CoursesPage } from "../pages/CoursesPage";
import { AboutPage } from "../pages/AboutPage";
import { PricingPage } from "../pages/PricingPage";
import { MandarinCoursePage } from "../pages/courses/Mandarin";
import { RegisterPage } from "../pages/RegistrationPage";

export const PagesRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/courses" element={<CoursesPage />} />
            <Route
                exact
                path="/courses/mandarin"
                element={<MandarinCoursePage />}
            />
            <Route exact path="/pricing" element={<PricingPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/resources" element={<div>Resources</div>} />
            <Route exact path="/contact" element={<div>Contact</div>} />
            <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
    );
};
