import styled from "styled-components";

export const StyledLevelCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  margin: 2rem 0;
  padding: 1.5rem;
  justify-items: center;
  max-width: 330px;
  height: min-content;

  & h3 {
    font-weight: 700;
    text-align: left;
    font-size: 1.3rem;
  }

  & ul {
    margin: 1rem 0;
    font-weight: 300;
    font-size: 0.9rem;

    & li {
      margin: 0.5rem 0;
      display: flex;
      justify-items: center;
      align-items: center;

      & span {
        margin-left: 10px;
        text-align: left;
      }
    }
  }

  & p {
    line-height: 1.4rem;
    font-size: 0.9rem;
    font-weight: 300;

    & span {
      font-weight: 500;
    }
  }
`;
