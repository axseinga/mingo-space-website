import React from "react";
import { Header } from "../../components/pageHeader/pageHeader";
import {
    StyledLanguagePage,
    StyledLanguagePageAbout,
} from "./styled/LanguagePage.styled";

export const MandarinCoursePage = () => {
    const headerSection = {
        header: "Mandarin Course",
        paragraph: `Learn Mandarin with personalized lesson plans from experienced and native-speaking teachers.`,
        features: ["Private Zoom Classes", "$25 / 1hr class"],
        btnText: "Sign up",
        btnHref: "/register",
        img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    };
    const about = {
        img: "/assets/Pic_MandarinZoomClassImage.jpg",
        title1: "Flexible lesson plans tailored to your needs",
        paragraph1:
            "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
        title2: "Interactive 1:1 Zoom classes with a native teacher",
        paragraph2:
            "Practice speaking, listening, reading, and writing with a native-speaking Mandarin teacher. All of our teachers are also experienced with teaching Mandarin.",
    };
    return (
        <StyledLanguagePage>
            <Header data={headerSection} />
            <StyledLanguagePageAbout>
                <div>
                    <div>
                        <h3>{about?.title1}</h3>
                        <p>{about?.paragraph1}</p>
                        <h3>{about?.title2}</h3>
                        <p>{about?.paragraph2}</p>
                    </div>
                    <img src={about?.img} />
                </div>
            </StyledLanguagePageAbout>
        </StyledLanguagePage>
    );
};
