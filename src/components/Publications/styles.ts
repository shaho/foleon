import styled from "styled-components";

export const PublicationsList = styled.ul`
  width: 100%;
  padding: 1.4rem;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PaginationWrapper = styled.section`
  display: flex;
  padding: 1.4rem;
  justify-content: center;
`;

export const SpinnerWrapper = styled.div`
  @media (min-width: 768px) {
    min-width: 762px;
  }

  @media (min-width: 992px) {
    min-width: 992px;
  }

  min-width: 992px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
