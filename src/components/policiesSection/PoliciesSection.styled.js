import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledPoliciesSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.color.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.text};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  & > p {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  & > div {
    display: flex;
    gap: 2rem;
    @media only screen and (max-width: ${BREAKPOINT_MOBILE}) {
      flex-direction: column;
      gap: 0rem;
    }
  }
`;
