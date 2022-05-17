import React from "react";
import { Header } from "../../components/pageHeader/pageHeader";
import { AboutCourse } from "../../components/aboutCourse/aboutCourse";
import { TeacherSection } from "../../components/teachersSection/TeachersSection";
import { TestimonialsSection } from "../../components/testimonials/Testimonials";
import { RegisterSection } from "../../components/registerBanner/Register";
import { StyledLanguagePage } from "./styled/LanguagePage.styled";
import { LevelSection } from "../../components/levelSection/levelSection";

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
        bgColor: "#EEF0F1",
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
    const teachersData = [
        {
            img: "/assets/Pic_TeacherPropic(Zhen).jpg",
            name: "Zhen Huang",
            about: "I have been teaching Mandarin to both adults and kids for the past 5 years. I believe that learning Mandarin should be ...See More",
            langs: ["Mandarin", "English", "Malay"],
        },
        {
            img: "/assets/Pic_TeacherPropic(Melanie).jpg",
            name: "Melanie Chou",
            about: "As a professional Mandarin teacher by day, I carry forward the same patient approach with my private lesson students ...See More",
            langs: ["Mandarin", "English"],
        },
        {
            img: "/assets/Pic_TeacherPropic(Lissa).jpg",
            name: "Lissa Zheng",
            about: "I’m a certified HSK Mandarin teacher and have been tutoring and teaching Mandarin for 1.5 years. Learning should be ...See More",
            langs: ["Mandarin", "English"],
        },
        {
            img: "/assets/Pic_TeacherPropic(Dylan).jpg",
            name: "Dylan Fan",
            about: "I specialize in teaching Mandarin to English speakers and majored in Chinese Language at the University of Waterloo. Now ...See More",
            langs: ["Mandarin", "English"],
        },
    ];
    const buyCourseData = {
        image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
        header: "Private Mandarin class pricing",
        subheader: "$25",
        content: `USD / <strong>1hr</strong> class`,
        isDark: false,
        isCenter: false,
        isFull: false,
    };
    const registerBannerData = {
        image: "/assets/Pic_ReadytoRegisterCard.jpg",
        header: "Ready to register?",
        content: "No payment required now.",
        isDark: true,
        isCenter: true,
        isFull: false,
    };
    return (
        <StyledLanguagePage>
            <Header data={headerData} />
            <AboutCourse data={aboutData} />
            <TeacherSection teachersData={teachersData} />
            <LevelSection />
            <RegisterSection data={buyCourseData} />
            <TestimonialsSection testimonials={testimonialsData} />
            <RegisterSection data={registerBannerData} />
        </StyledLanguagePage>
    );
};
