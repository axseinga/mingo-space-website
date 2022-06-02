import React, { useState } from "react";
import { StyledDropdown } from "./Dropdown.styled";

export const Dropdown = ({ label, placeholder, options }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <StyledDropdown>
            <p>{label}</p>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    {placeholder} <span>v</span>
                </button>
                {isVisible === false ? (
                    ""
                ) : (
                    <div>
                        {options.map((o) => (
                            <a
                                key={o}
                                onClick={() => {
                                    setIsVisible(false);
                                    // handleChange(o);
                                }}
                            >
                                {o}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </StyledDropdown>
    );
};
