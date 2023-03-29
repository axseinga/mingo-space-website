import styled from "styled-components";
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_TABLET,
} from "../../styles/breakpoints";

export const StyledTeachersSection = styled.section`
  margin: 2rem;

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    margin: 2rem 5rem;
  }

  & > div {

  & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.black};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      text-align: center;
    }
  }

  & > p {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      text-align: center;
    }
  }
}
`;

export const StyledTeachersCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
  }
`;
