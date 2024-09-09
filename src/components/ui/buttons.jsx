import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  margin: 1rem 0;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.1s;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
  }

  &:active {
    background-color: #004494;
    transform: scale(0.98); /* Slightly shrink the button */
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
