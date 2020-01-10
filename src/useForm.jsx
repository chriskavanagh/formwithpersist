import { useState } from "react";

// using variable Object to hold state/onChange
const useForm = () => {
  const [state, setState] = useState({});

  const bind = {
    state: state,
    onChange: e => setState(e.target.value)
  };

  return [state, bind];
}; //end

export default useForm;

/* ======================================================================= */

/* const useForm = () => {
  const [state, setState] = useState({});

  const handleChange = e => {
    e.persist();
    setState(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [state, handleChange];
}; //end

export default useForm; */
