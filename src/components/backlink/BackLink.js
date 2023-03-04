import React from "react";
import { StyledBackLink } from "./BackLinks.styled";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const BackLink = () => {
  return (
    <StyledBackLink>
      <BsFillArrowUpCircleFill
        className="BackLink-icon"
        onClick={window.scrollTo(0, 0)}
      />
    </StyledBackLink>
  );
};
