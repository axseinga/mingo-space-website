import React, { useState } from "react";
import {
    StyledDropdownWithInput,
    StyledDropdownInner,
    ButtonWrapper,
    StyledFlagInput,
    DropdownOptions,
    StyledInput,
} from "./DropdownWithInput.styled";
import Flag from "react-world-flags";

export const DropdownWithInput = ({
    dropdownLabel,
    dropdownPlaceholder,
    dropdownOptions,
    inputLabel,
    inputName,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [prefix, setPrefix] = useState(dropdownPlaceholder.code);

    return (
        <StyledDropdownWithInput>
            <label htmlFor={inputName}>{inputLabel}</label>
            <StyledDropdownInner>
                <StyledFlagInput>
                    <p>{dropdownLabel}</p>
                    <ButtonWrapper open={isVisible}>
                        <button
                            type="button"
                            onClick={() => {
                                setIsVisible(!isVisible);
                            }}
                        >
                            <Flag
                                code={prefix}
                                fallback={<span>Unknown</span>}
                                height="16"
                            />
                            <img src="/assets/icons/arrow-dropdown.svg" />
                        </button>
                        {isVisible === false ? (
                            ""
                        ) : (
                            <DropdownOptions>
                                {dropdownOptions.map((o) => (
                                    <a
                                        key={o}
                                        onClick={() => {
                                            setIsVisible(false);
                                            setPrefix(o.code);
                                        }}
                                    >
                                        <Flag
                                            code={o.code}
                                            fallback={<span>Unknown</span>}
                                            height="16"
                                        />
                                        <span>{o.prefix}</span>
                                    </a>
                                ))}
                            </DropdownOptions>
                        )}
                    </ButtonWrapper>
                </StyledFlagInput>
                <StyledInput>
                    <input
                        id={inputName}
                        name={inputName}
                        placeholder={inputLabel}
                    />
                </StyledInput>
            </StyledDropdownInner>
        </StyledDropdownWithInput>
    );
};
