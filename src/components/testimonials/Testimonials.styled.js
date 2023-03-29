import styled from "styled-components";
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledTestimonialsSection = styled.section`
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    text-align: center;
  }

  & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.black};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
  }

  & p {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
`;

export const TestimonialsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
  margin-top: 3.5rem;

  @media only screen and (max-width: ${BREAKPOINT_TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${BREAKPOINT_MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
