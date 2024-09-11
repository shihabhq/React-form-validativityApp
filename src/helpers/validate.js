import shortenStateToValue from "./shortenState";

const validateInput = (servedObj) => {
    const shortenedObj = shortenStateToValue(servedObj);
    const errors = Object.keys(shortenedObj).reduce((acc, cur) => {
      acc[cur] = !shortenedObj[cur];
      return acc;
    }, {});
  
    return {
      errors,
      isValid: !Object.values(errors).includes(true),
    };
  };

  export default validateInput