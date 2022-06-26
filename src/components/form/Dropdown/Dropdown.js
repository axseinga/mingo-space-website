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
                    {placeholder}{" "}
                    <img
                        src="/assets/icons/keyboard-arrow-down.svg"
                        alt="Open dropdown"
                    />
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
