import styled, { css } from "styled-components";
import { BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledAccordion = styled.div`
  padding: 0.5rem 0;
  font-weight: 300;

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 70%;
}

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    font-size: 1.2rem;

    & button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      & img {
        width: 2.5rem;
      }
    }
  }

  & > p {
    height: 0;
    overflow: hidden;
    transition: height 0.2s;

    ${({ show }) => {
      if (show) {
        return css`
        height: 48px;
        line-height: 1.6rem;`
      }
    }}
  }
`;
