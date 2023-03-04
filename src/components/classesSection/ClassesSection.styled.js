import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledClassesSection = styled.section`
  padding: 2rem;

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    margin: 0 auto;
    width: 70%;
  }

  & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.black};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin-bottom: 2rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      text-align: center;
    }
  }
`;

export const StyledClassesItems = styled.div`
  display: grid;
`;

export const StyledClassesItem = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: flex;
    gap: 2rem;
  }
  & img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 2rem;
    box-shadow: ${({ theme }) => theme.shadow};

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      max-width: 50%;
      order: -1;
    }
  }
`;

export const StyledClassesContent = styled.div`
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
