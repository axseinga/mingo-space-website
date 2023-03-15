import styled from "styled-components";

export const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--container-width);
  height: calc(1rem * ${({ times = 4 }) => times});
  margin-left: auto;
  margin-right: auto;
`;
