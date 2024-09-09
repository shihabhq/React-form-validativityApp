import styled from "styled-components";
import { Input, Label } from "../ui/input";
import PropTypes from "prop-types";

const Container = styled.div`
  border: 1px solid gray;
  width: 80%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;

const TextGroup = ({
  name,
  error,
  placeholder,
  value,
  handleChange,
  onBlur,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        error={error ? "true" : undefined}
      />
      {error && <ErrorText>Invalid {name} input</ErrorText>}
    </Container>
  );
};

TextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TextGroup;
