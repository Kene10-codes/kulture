import React, { useReducer, createContext } from "react";
import Login from "../pages/Login/Login";

// Provide Context
export const FormContext = createContext();

// Define the state
const loginState = {
  email: "",
  password: "",
  loading: true,
  error: "",
};

const SignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  loading: true,
  error: "",
};

const FormReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return {
          ...state,
          email: state.email,
          password: state.password,
        };
      case "FAILED":
        return {
          ...state,
          email: "",
          password: ""
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, loginState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <Login />
    </FormContext.Provider>
  );
};

export default FormReducer;
