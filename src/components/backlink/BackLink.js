import React from "react";
import { StyledBackLink } from "./BackLinks.styled";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const BackLink = () => {
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  return (
    <StyledBackLink>
      <BsFillArrowUpCircleFill
        className="BackLink-icon"
        onClick={handleScrollToTop}
      />
    </StyledBackLink>
  );
};
