import styled from "styled-components";

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  width: 80%;
  border-radius: 4px;
  outline: ${(props) => (props.error ? "2px solid red" : "none")};
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
  &:hover {
    border-color: #aaa;
  }
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  &::placeholder {
    color: #888;
    font-style: italic;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
  &:hover {
    color: #007bff;
    cursor: pointer;
  }
`;

export { Input, Label };
