import styled from "styled-components";

export const SearchWrapper = styled.section`
  display: flex;
  min-height: 40px;
  justify-content: flex-end;
  align-items: center;
  padding: 1.4rem 0;
`;

export const Box = styled.div`
  display: block;
  width: 35%;
  margin-right: 2rem;
  form {
    width: 100%;
    display: flex;
    justify-content: stretch;
  }
`;
export const SearchButton = styled.button`
  font: inherit;
  line-height: 1;
  background-color: #fff;
  border: 2px solid #6558d3;
  color: #6558d3;
  margin-left: 1rem;
  cursor: pointer;
  padding: 0.5em 1em;
  border-radius: 2px;
  font-weight: 500;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  &:hover,
  &:focus {
    background-color: #6558d3;
    color: #fff;
  }
`;

export const SerachInput = styled.input`
  display: block;
  flex: 1;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.5s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #6558d3;
    outline: 0;
  }
`;
