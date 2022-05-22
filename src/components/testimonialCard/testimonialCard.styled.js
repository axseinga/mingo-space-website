import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledTestimonialCard = styled.div`
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.color.white};
    padding: 1.5rem;
    padding-top: 2.5rem;
    margin: 1rem 0;
    position: relative;
    border-radius: 10px;
    text-align: center;
    max-width: 330px;
    height: 270px;

    & .TestimonialCard-name {
        font-weight: 700;
        margin-top: 1.5rem;
    }

    & .TestimonialCard-course {
        margin: 0.8rem 0;
        font-weight: 300;
        font-size: 0.8rem;
    }

    & .TestimonialCard-review {
        line-height: 1.4rem;
        margin: 0.5rem 0;
        font-size: 0.9rem;
        font-weight: 300;
        text-align: left;
    }

    & img {
        width: 6rem;
        height: auto;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
