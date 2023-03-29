import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.fontPoppins};
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1.5rem;

  ${(props) =>
    props.default &&
    css`
      background-color: ${({ theme }) => theme.color.btnDefault};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.btnDefault};
      background: linear-gradient(
          to left,
          ${({ theme }) => theme.color.btnDefault} 50%,
          ${({ theme }) => theme.color.white} 50%
        )
        right;
      background-size: 210%;
      transition: 0.5s ease-out;

      & a {
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
        transition: color 0.2s;
      }

      &:active,
      &:hover {
        color: ${({ theme }) => theme.color.btnDefault};
        background-position: left;

        & a {
          color: ${({ theme }) => theme.color.btnDefault};
        }
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.color.disabled};
    `}
     ${(props) =>
    props.big &&
    css`
      font-size: 1.3rem;
    `}
`;
