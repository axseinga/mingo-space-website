import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { CoursesPage } from "../pages/CoursesPage/CoursesPage";
import { CoursesSubpage } from "../pages/CoursesPage/CoursesSubpage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { PricingPage } from "../pages/PricingPage/PricingPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/courses" element={<CoursesPage />} />
      <Route exact path="/courses/mandarin" element={<CoursesSubpage language="mandarin" />} />
      <Route exact path="/courses/japanese" element={<CoursesSubpage language="japanese" />} />
      <Route exact path="/courses/malay" element={<CoursesSubpage language="malay" />} />
      <Route exact path="/courses/kids" element={<CoursesSubpage language="kids" />} />
      <Route exact path="/pricing" element={<PricingPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/resources" element={<div>Resources</div>} />
      <Route exact path="/contact" element={<div>Contact</div>} />
      <Route exact path="/register" element={<RegistrationPage />} />
    </Routes>
  );
};
