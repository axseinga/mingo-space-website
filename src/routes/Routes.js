import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { CoursesPage } from "../pages/CoursesPage";
import { AboutPage } from "../pages/AboutPage";

export const PagesRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/courses" element={<CoursesPage />} />
            <Route exact path="/pricing" element={<div>Pricing</div>} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/resources" element={<div>Resources</div>} />
            <Route exact path="/contact" element={<div>Contact</div>} />
            <Route exact path="/register" element={<div>Registration</div>} />
        </Routes>
    );
};
