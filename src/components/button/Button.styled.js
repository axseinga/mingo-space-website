import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.fontPoppins};
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1.5rem;

  & a {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }

  ${(props) =>
    props.default &&
    css`
      background-color: ${({ theme }) => theme.color.btnDefault};
      color: ${({ theme }) => theme.color.white};

      &:hover {
        background-color: ${({ theme }) => theme.color.btnHover};
      }
      &:focus,
      &:active {
        background-color: ${({ theme }) => theme.color.btnActive};
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
