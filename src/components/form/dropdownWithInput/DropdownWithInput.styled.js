import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../../styles/breakpoints";

export const StyledDropdownWithInput = styled.div`
    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
        transform: translateY(5px);
    }
    & label {
        margin-bottom: 10px;
        font-weight: 700;
    }

    & input {
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        font-size: 1.1rem;
    }
`;

export const StyledDropdown = styled.div``;

export const StyledDropdownInner = styled.div`
    display: flex;
`;

export const ButtonWrapper = styled.div`
    z-index: 10;
    position: relative;
    margin: 1rem 0;
    & button {
        background-color: ${({ theme }) => theme.color.white};
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: ${({ open }) => (open ? 0 : "10px")};
        font-size: 1.1rem;
        width: 80px;
        color: ${({ theme }) => theme.color.line};
        display: flex;
        align-items: center;
        height: 54px;
        cursor: pointer;
        position: relative;

        & span {
            width: 20px;
            height: 20px;
        }
    }
`;

export const StyledFlagInput = styled.div`
    z-index: 10;
`;

export const DropdownOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top: 0;
    font-size: 1.1rem;
    width: 80px;
    color: ${({ theme }) => theme.color.line};
    cursor: pointer;
    overflow-y: scroll;
    max-height: 100px;
    position: absolute;
    z-index: 10;

    & a {
        width: 100%;
        padding: 0.3rem;
        display: flex;
        gap: 3px;
        align-items: center;
        justify-content: space-around;

        &:hover,
        &:active {
            color: ${({ theme }) => theme.color.btnHover};
        }

        &:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme.color.line};
        }

        & span {
            font-size: 0.8rem;
        }
    }
`;

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;

    & input {
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        border-left: 0px;
        font-size: 1.1rem;
        width: 100%;
    }
`;
