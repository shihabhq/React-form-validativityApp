import { useState } from "react";
import Button from "../components/ui/buttons";
import TextGroup from "../components/shared/textgroup";

const init = {
  title: {
    value: "",
    error: false,
  },
  bio: {
    value: "",
    error: false,
  },
  skills: {
    value: "",
    error: false,
  },
};

function App() {
  const [values, setValues] = useState({ ...init });
  const [dataShow, setDataShow] = useState({});

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

  const validateInput = (servedObj) => {
    const errors = {
      title: !servedObj.title.value,
      bio: !servedObj.bio.value,
      skills: !servedObj.skills.value,
    };

    return {
      errors,
      isValid: !Object.values(errors).includes(true),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateInput(values);
    setValues({
      title: { ...values.title, error: errors.title },
      bio: { ...values.bio, error: errors.bio },
      skills: { ...values.skills, error: errors.skills },
    });

    if (isValid) {
      const newObject = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.value])
      );

      // Object.keys(values).reduce((acc, cur) => {
      //   acc[cur] = values[cur].value;

      //   return acc;
      // }, {})
      setDataShow(newObject);
    } else {
      setDataShow({});
    }
  };
  return (
    <>
      <form action="">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextGroup
            name="title"
            error={values.title.error}
            placeholder="enter your name"
            value={values.title.value}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
          <TextGroup
            name="bio"
            error={values.bio.error}
            placeholder="I am a..."
            value={values.bio.value}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
          <TextGroup
            name="skills"
            error={values.skills.error}
            placeholder="javascript,python..."
            value={values.skills.value}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </form>
      <div>
        {Object.keys(dataShow).length > 0 && (
          <>
            <h1>title: {dataShow.title}</h1>
            <h2>bio: {dataShow.bio}</h2>
            <h3>skills: {dataShow.skills}</h3>
          </>
        )}
      </div>
    </>
  );
}

export default App;
