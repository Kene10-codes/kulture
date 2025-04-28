import React, { useContext, useEffect, useState } from "react";
import "./Login.css";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [form, setForm] = useState(initialState);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(form);

  const { email, password } = form;
  return (
    <div>
      <h2>Login </h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleForm}
          />
        </div>
        <button >Log In</button>
      </form>
    </div>
  );
};

export default Login;
