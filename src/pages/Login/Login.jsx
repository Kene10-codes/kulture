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

  const { email, password } = form;
  return (
    <div className="login_container">
      <div className="login_header">
        {" "}
        <h2>Sign In</h2>
        <div>
          <h3>
            {" "}
            Enter details to signin, dont have an accoount{" "}
            <span className="signup_text">signup</span>
          </h3>
        </div>
      </div>
      <div>
        <form action="">
          <div className="input_wrapper">
            <label htmlFor="email">Email address</label>
            <input
              className="input_email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleForm}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input_password"
              name="password"
              value={password}
              onChange={handleForm}
            />
            <span className="forgot_password">Forgot Password</span>
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
