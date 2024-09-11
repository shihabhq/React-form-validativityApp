import { useState } from "react";
import validateInput from "../helpers/validate";
import expandValueToState from "../helpers/expandValue";
import shortenStateToValue from "../helpers/shortenState";

/**
 * @typedef {Object} param
 * @property {Object} init
 * @property {Object | boolean} validate
 *
 *
 * @param {param} param0
 * @returns
 */

const useForm = ({ init }) => {
  const [values, setValues] = useState(expandValueToState(init));

  const handleChange = (e) => {
    const key = e.target.name;
    setValues((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        value: e.target.value,
        error: !e.target.value,
      },
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    setValues((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        error: !prev[key].value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateInput(values);
    const newValues = Object.keys(values).reduce((acc, cur) => {
      acc[cur] = { ...values[cur], error: errors[cur] };

      return acc;
    }, {});
    setValues(newValues);

    if (isValid) {
      console.log('valid form: ', shortenStateToValue(newValues))
      
    } else {
      console.log('invalid form')
    }
  };

  return {
    formState: values,
    handleSubmit,
    handleBlur,
    handleChange,
  };
};

export default useForm;

//helper function



//validate
// const validateInput = (servedObj) => {
//   const shortenedObj = shortenStateToValue(servedObj);
//   const errors = Object.keys(shortenedObj).reduce((acc, cur) => {
//     acc[cur] = !shortenedObj[cur];
//     return acc;
//   }, {});

//   return {
//     errors,
//     isValid: !Object.values(errors).includes(true),
//   };
// };
