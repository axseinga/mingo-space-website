import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledAboutCourse = styled.section`
  padding: 2rem 6rem;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.color.bg : theme.color.white};

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-areas: "img content";
  }

  & img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 2rem;
    box-shadow: ${({ theme }) => theme.shadow};

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      grid-area: img;
      width: 70%;
      justify-self: center;
    }
  }
`;

export const StyledAboutCourseContent = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 80%;
    justify-self: start;
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.8rem;

    margin-top: 1.5rem;
  }

  & p {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
`;
