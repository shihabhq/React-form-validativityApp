import useForm from "../hooks/useForm";
import TextGroup from "../components/shared/textgroup";
import Button from "../components/ui/buttons";

const init = { firstname: "", lastname: "", email: "", phone: "" };

const App = () => {
  const {
    formState: values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm({ init });

  return (
    <form action="">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Object.keys(init).map((property, index) => {
          const formField = values[property];

          return (
            <TextGroup
              key={index}
              name={property}
              error={formField?.error}
              placeholder={`enter your ${property}`}
              value={formField?.value}
              handleChange={handleChange}
              onBlur={handleBlur}
            />
          );
        })}
      </div>

      <Button onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default App;

// const init = { name: "", email: "", phone: "" };

// const App = () => {
//   const {
//     formState: values,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useForm({ init });

//   return (
//     <form action="">
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         {Object.keys(init).map((property, index) => {

//           const formField = values[property] ;

//           return (
//             <TextGroup
//               key={index}
//               name={property}
//               error={formField.error} // Get the error for the current field
//               placeholder={`Enter your ${property}`}
//               value={formField.value} // Get the value for the current field
//               handleChange={handleChange}
//               onBlur={handleBlur}
//             />
//           );
//         })}
//       </div>

//       <Button onClick={handleSubmit} type="submit">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default App;
