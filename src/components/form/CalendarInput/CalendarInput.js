import React from "react";
import { StyledCalendarInput, StyledOption } from "./CalendarInput.styled";

export const CalendarInput = ({ type, label, options }) => {
    return (
        <StyledCalendarInput>
            <p>{label}</p>
            <div>
                {options?.map((o) => (
                    <StyledOption key={o}>
                        <label for={o}>
                            <input type={type} id={o} name={o} value={o} />
                            <span>{o}</span>
                        </label>
                    </StyledOption>
                ))}
            </div>
        </StyledCalendarInput>
    );
};
