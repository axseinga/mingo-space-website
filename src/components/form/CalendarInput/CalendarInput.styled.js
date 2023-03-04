import styled from "styled-components";

export const StyledCalendarInput = styled.div`
    & > div {
        display: flex;
    }
`;

export const StyledOption = styled.div`
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
    margin-bottom: 2rem;

    &:hover input ~ span {
        background-color: #ccc;
    }

    & label {
        text-align: center;
        display: flex;

        & input {
            position: absolute;
            top: 5px;
            left: 0;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        & span {
            position: absolute;
            top: 5px;
            left: 0;
            height: 30px;
            width: 30px;
            font-size: 0.9rem;
            color: ${({ theme }) => theme.color.line};
            font-family: ${({ theme }) => theme.font.fontPoppins};
            font-weight: 300;
            border: 1px solid ${({ theme }) => theme.color.line};
            border-right: 0px;
        }
    }
`;
