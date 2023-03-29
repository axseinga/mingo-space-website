import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledTeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  height: min-content;
  margin: 2rem 0;
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    flex-direction: row;
    width: 100%;
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
      width: 40%;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 10px;
    }
  }

  & > div {
    padding: 1.5rem 1rem;

    & h3 {
      font-weight: 700;
      margin-top: 1.5rem;
      text-align: left;
    }

    & p {
      line-height: 1.4rem;
      margin: 0.5rem 0;
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;

export const StyledLanguages = styled.div`
  & p {
    opacity: 0.7;
  }
  & span {
    padding: 0.3rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    font-size: 0.7rem;
    border-radius: 8px;
    font-weight: 300;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
