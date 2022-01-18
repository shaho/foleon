import styled from "styled-components";

export const Box = styled.article`
  position: relative;
  width: 100%;
  a {
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    transition: all 0.3s;
    border-radius: 8px;
    box-shadow: 0 30px 30px -25px rgba(#4133b7, 0.25);
    &:hover {
      background-color: #a78bfa;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
  h3 {
    font-size: 1.5rem;
    color: #141b22;
    line-height: 1.25;
    padding: 1.4rem;
    & + * {
      margin-top: 1rem;
    }
  }
`;

export const CardCategory = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  display: inline;
  background-color: #f1eeff;
  color: #6558d3;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
  line-height: 1;
  border-radius: 6px;
  & + * {
    margin-top: 1rem;
  }
`;

export const CardImage = styled.span`
  width: 100%;
  background-color: #ddd6fe;
  height: 100px;
  display: block;
  border-radius: 4px 4px 0 0;
  &:hover {
    background-color: #ede9fe;
  }
`;
