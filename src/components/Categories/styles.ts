import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1.4rem;
  background-color: #fff;
  border-bottom: 2px solid #f4f2f2;
  padding: 1.25rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const Tag = styled.span`
  cursor: pointer;
  background-color: #f1eeff;
  color: #6558d3;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5em 0.75em;
  margin: 0.5rem;
  line-height: 1;
  border-radius: 6px;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background-color: #6522d3;
  }
  & + * {
    margin-top: 1rem;
  }
  &.active {
    background: #6522d3;
    color: white;
  }
`;
