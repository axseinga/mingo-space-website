import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledPricingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PricingPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & h1 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.black};
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3.5rem;
  }

  & p {
    width: 80%;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    margin: 0 auto;

    & strong {
      font-weight: 600;
    }
  }
`;

export const StyledPricingCards = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;

  @media only screen and (max-width: ${BREAKPOINT_MOBILE}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;
