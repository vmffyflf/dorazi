import React, { useState } from "react";
import "./custom.css";
import { FaTwitter,FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <FaTwitter className="twt_icon" />
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="field textField"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="field textField"
        />
        <input
          type="submit"
          value="Create Account"
          className="field btn_lb"
        />
        <a href="#!" className="sign_in">
          Sign in
        </a>
      </form>
      <div className="continue_btn">
        <button className="field">Continue with Google<FaGoogle className="btn_icon"/></button>
        <button className="field">Continue with Github<BsGithub className="btn_icon"/></button>
      </div>
    </div>
  );
};

export default Auth;
