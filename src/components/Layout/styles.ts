import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  margin: 4rem auto;
  background-color: #faf9f9;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

export const DetailContainer = styled.div`
  padding: 1.4rem;

  div {
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
  }

  h2,
  h3,
  p {
    margin: 1.4rem 0;
  }

  h2,
  p {
    font-size: 1.4rem;
  }
`;
