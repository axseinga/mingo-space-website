import React from "react";
import { Header } from "../../components/pageHeader/pageHeader";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { RegisterSection } from "../../components/registerBanner/Register";
import {
    StyledLanguagePage,
    StyledLanguagePageAbout,
} from "./styled/LanguagePage.styled";

export const MandarinCoursePage = () => {
    const headerData = {
        header: "Mandarin Course",
        paragraph: `Learn Mandarin with personalized lesson plans from experienced and native-speaking teachers.`,
        features: ["Private Zoom Classes", "$25 / 1hr class"],
        btnText: "Sign up",
        btnHref: "/register",
        img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    };
    const aboutData = {
        img: "/assets/Pic_MandarinZoomClassImage.jpg",
        title1: "Flexible lesson plans tailored to your needs",
        paragraph1:
            "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
        title2: "Interactive 1:1 Zoom classes with a native teacher",
        paragraph2:
            "Practice speaking, listening, reading, and writing with a native-speaking Mandarin teacher. All of our teachers are also experienced with teaching Mandarin.",
    };
    const testimonialsData = [
        {
            name: "Rina",
            img: "Pic_Testimonial1Propic_Mandarin.png",
            flag: "🇯🇵",
            course: "Mandarin Course",
            review: "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
        },
        {
            name: "Roman",
            img: "Pic_Testimonial2Propic_Mandarin.png",
            flag: "🇺🇸",
            course: "Mandarin Course",
            review: "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
        },
        {
            name: "Carl",
            img: "Pic_Testimonial3Propic-Mandarin.png",
            flag: "🇩🇪",
            course: "Malay Course",
            review: "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
        },
        {
            name: "Ananya",
            img: "Pic_Testimonial4Propic_Mandarin.png",
            flag: "🇸🇬",
            course: "Japanese Course",
            review: "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
        },
    ];
    return (
        <StyledLanguagePage>
            <Header data={headerData} />
            <StyledLanguagePageAbout>
                <div>
                    <div>
                        <h3>{aboutData?.title1}</h3>
                        <p>{aboutData?.paragraph1}</p>
                        <h3>{aboutData?.title2}</h3>
                        <p>{aboutData?.paragraph2}</p>
                    </div>
                    <img src={aboutData?.img} />
                </div>
            </StyledLanguagePageAbout>
            <TestimonialsSection testimonials={testimonialsData} />
            <RegisterSection />
        </StyledLanguagePage>
    );
};
