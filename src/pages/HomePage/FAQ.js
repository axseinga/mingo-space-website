import React from "react";
import { StyledFAQSection } from "../styled/HomePage.styled";
import { Accordion } from "../../components/accordion/Accordion";

export const FAQ = () => {
    const pairs = [
        {
            question: "Who are my teachers?",
            answer: "Teachers at Mingo Space come from a variety of educational backgrounds and have teaching experience. Our teachers are carefully chosen by our team to ensure high-quality instruction.",
        },
        {
            question: "What are my options for classes?",
            answer: "Mingo Space creates standardised lesson materials based on textbooks to optimise your learning process. On request, we can also provide personalised lessons.",
        },
        {
            question: "What materials are used in MingoSpace lessons?",
            answer: "We teach you through live one-on-one lessons using Zoom or Skype as a platform.",
        },
        {
            question: "Do I need to pay for the lesson materials?",
            answer: "No, we provide all materials, so there is no need for you to spend money on them.",
        },
        {
            question: "How do I pay for lessons?",
            answer: "We accept payment through PayPal and bank transfer (for Malaysia and Singapore only). For payment made through PayPal will have extra 3% surcharge.  ",
        },
        {
            question: "How do I reschedule or cancel my class?",
            answer: "You can reschedule or cancel your classes through sending an email to info@mingospace.com or whatsapp us at +6010-2510962. However cancellation or rescheduling must be made at least one day before the scheduled class.",
        },
        {
            question: "If I cancel my class, will I be refunded?",
            answer: "If you cancel or reschedule within 24 hours of your scheduled class, you will not receive a refund.",
        },
        {
            question: "What if my teacher doesn’t show up to class?",
            answer: "We are confident that such incidents will not occur because our teachers were chosen as responsible candidates by the team. However, if this occurs, please contact us via email at info@mingospace.com or via WhatsApp at +6010-2510962 to discuss and reschedule the lesson at no additional cost.",
        },
        {
            question: "What if I prefer a different teacher?",
            answer: "We assign teachers to our students at Mingo Space based on availability and the needs of the students. However, if you have a preferred teacher or wish for a permanent teacher, please contact us so that we can make arrangements.",
        },
    ];
    return (
        <StyledFAQSection>
            <h2>FAQs</h2>
            {pairs.map((pair, i) => (
                <Accordion
                    key={i}
                    question={pair.question}
                    answer={pair.answer}
                />
            ))}
        </StyledFAQSection>
    );
};
