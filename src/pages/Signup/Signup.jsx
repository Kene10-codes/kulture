import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Signup.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { firstName, lastName, username, email, password } = form;
  return (
    <div className="signup_container">
      <div className="signup_header">
        {" "}
        <img className="logo" src={Logo} alt="Kulture Logo" />
        <h2>Kindly provide the details below to get started</h2>
      </div>
      <div>
        <form action="">
          <div className="input_wrapper label_fname">
            <div className="div_name">
              {" "}
              <label htmlFor="firstName"> First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleForm}
              />
            </div>
            <div className="div_name div_two">
              <label htmlFor="lastName"> Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="input_wrapper">
            <label htmlFor="email">Email</label>
            <input
              className="input_email"
              type="email"
              name="email"
              value={email}
              onChange={handleForm}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="username">Choose a Username</label>
            <input
              type="text"
              className="input_username"
              name="username"
              value={username}
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
            <div className="password_text">
              <span>
                <span className="asterisk">*</span> Passwords must be at least 8
                characters in length, at least one uppercase character, at least
                one lowercase character, and must contain at least one digit
                character OR a symbol.
              </span>
            </div>
          </div>
          <div className="checkbox_container">
            <input
              className="input_checkbox"
              type="checkbox"
              name="terms"
              id=""
            />
            <label htmlFor="terms">
              By checking the box, you accept Kulture’s <span className="terms_condition_text"><span>Terms and Conditions</span></span>
            </label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
