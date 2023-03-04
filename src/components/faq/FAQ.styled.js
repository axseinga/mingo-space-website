import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledFAQSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.bg};

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-right: 20rem;
    padding-left: 20rem;
  }

  & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    color: ${({ theme }) => theme.color.black};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin-top: 2rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      text-align: center;
    }
  }

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.color.line};

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.color.line};
    }
  }
`;
