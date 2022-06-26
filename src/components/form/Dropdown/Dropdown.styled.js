import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;

    & p {
        margin-bottom: 10px;
        font-weight: 700;
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 52px;
        padding: 1rem 1.5rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        font-size: 1.1rem;
        background-color: ${({ theme }) => theme.color.whiteR};
        color: ${({ theme }) => theme.color.line};

        cursor: pointer;
        &:hover {
        }
    }
    & > div div {
        position: absolute;
        width: 100%;
        background-color: ${({ theme }) => theme.color.whiteR};
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.color.line};
        z-index: 1;

        & a {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            &:hover {
                color: ${({ theme }) => theme.color.btnHover};
            }
        }
    }
`;
