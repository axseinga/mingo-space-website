import React from "react";
import { StyledClassesSection } from "../styled/HomePage.styled";

export const ClassesSection = () => {
    const classes = [
        {
            title: "Personalized learning materials",
            paragraph:
                "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress.",
            img: "Pic_Personalizedcurriculum.jpg",
        },
        {
            title: "Free flashcards and resources",
            paragraph:
                "After each lesson, teacher provide students with the lesson materials and free flashcards that encourage additional fun learning.",
            img: "Pic_Freeflashcardsandresources.jpg",
        },
        {
            title: "Practice language skills 1:1",
            paragraph:
                "Practice speaking, listening, reading, and writing all in a single lesson! Lesson topics can also be flexible to your interests.",
            img: "Pic_Practicelanguageskills1.jpg",
        },
    ];
    return (
        <StyledClassesSection>
            <h2>Personalized 1:1 online classes</h2>
            <div>
                {classes.map((cl) => (
                    <div>
                        <div>
                            <h3>{cl.title}</h3>
                            <p>{cl.paragraph}</p>
                        </div>
                        <img src={`./assets/${cl.img}`} />
                    </div>
                ))}
            </div>
        </StyledClassesSection>
    );
};
