import styled from "styled-components";

export const StyledTestimonialCard = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.color.white};
  padding: 1.5rem;
  padding-top: 2.5rem;
  margin: 1rem 0;
  position: relative;
  border-radius: 10px;
  text-align: center;
  max-width: 330px;
  min-height: 340px;
  max-height: max-content;

  & img {
    width: 6rem;
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TestimonialCardName = styled.p`
  font-weight: 700;
  margin-top: 1.5rem;
`;

export const TestimonialCardCourse = styled.p`
  margin: 0.8rem 0;
  font-weight: 300;
  font-size: 0.8rem;
`;

export const TestimonialCardReview = styled.p`
  line-height: 1.4rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
`;
