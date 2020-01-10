import React from "react";
import useForm from "./useForm";

// destrucure useForm hook, rename variables, 1 for firstName, 1 for handle
// and same with bindFirst/bindHandle. . .spread it to replace
// value & onChange func
function Form() {
  const [stateName, bindFirst] = useForm();
  const [stateHandle, bindHandle] = useForm();

  const register = e => {
    e.preventDefault();
    console.log(stateName, stateHandle);
  };
  return (
    <div>
      <form
        onSubmit={register}
        className="form-group p-3 mt-5 bg-white shadow-lg border border-dark-rounded"
      >
        <div>
          <label htmlFor="firstName" id="first">
            First Name
          </label>
          <input
            {...bindFirst}
            type="text"
            name="firstName"
            className="form-control p-1 shadow-m mb-1"
          />
        </div>
        <div>
          <label htmlFor="handle" id="handle">
            Handle
          </label>
          <input
            {...bindHandle}
            type="text"
            name="handle"
            className="form-control p-1 shadow-m mb-1"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3 shadow">
          Submit
        </button>
      </form>
    </div>
  );
} //end

export default Form;

// using useForm, but with e.persist()
// and setState(state => ({ ...state, [e.target.name]: e.target.value }));
// in useForm.jsx

/* function Form() {
  const [values, handleChange] = useForm();

  const register = e => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <form
        onSubmit={register}
        className="form-group p-3 mt-5 bg-white shadow-lg border border-dark-rounded"
      >
        <div>
          <label htmlFor="firstName" id="first">
            First Name
          </label>
          <input
            value={values.firstName || ""}
            onChange={handleChange}
            type="text"
            name="firstName"
            className="form-control p-1 shadow-m mb-1"
          />
        </div>
        <div>
          <label htmlFor="handle" id="handle">
            Lastname
          </label>
          <input
            value={values.handle || ""}
            onChange={handleChange}
            type="text"
            name="handle"
            className="form-control p-1 shadow-m mb-1"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3 shadow">
          Submit
        </button>
      </form>
    </div>
  );
} //end

export default Form; */
