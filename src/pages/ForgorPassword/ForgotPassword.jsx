import React, { useContext, useEffect, useState } from "react";
import "./ForgotPassword.css";

const initialState = {
  email: "",
  otp: "",
  password: "",
  confirmPassword: "",
};

const ForgotPassword = () => {
  const [form, setForm] = useState(initialState);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { email, otp, password, confirmPassword } = form;
  return (
    <div className="forgot_password_container">
      <div className="forgot_password_header">
        {" "}
        <h2>Forgot Password</h2>
        <div>
          <h3>
            {" "}
            Enter details to change password or{" "}
            <span className="signin_text">signin</span>
          </h3>
        </div>
      </div>
      <div>
        <form action="">
        <label htmlFor="email">Email Address</label>
          <div className="input_wrapper_otp">
            {" "}
         
          
              <input
                className="input_email"
                type="email"
                name="email"
                value={email}
                onChange={handleForm}
              />
          
            <button className="btn_otp">Send OTP</button>
          </div>
        </form>

        <form action="">
          <div className="input_wrapper">
            <label htmlFor="otp">OTP</label>
            <input
              className="input_otp"
              type="text"
              name="otp"
              value={otp}
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
          </div>
          <div className="input_wrapper">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="input_password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleForm}
            />
          </div>
          <button className="btn_password">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
