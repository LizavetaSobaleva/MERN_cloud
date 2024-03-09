import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./authorization.less";
import Input from "../UI/input/Input";
import PrimaryButton from "../UI/primaryButton/PrimaryButton";
import { registration } from "../../actions/user";

const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  return (
    <div className="authorization">
      <div className="authorization__container">
        <div className="authorization__label">
          <h1>Create your account</h1>
        </div>
        <div className="authorization__form">
          <div className="authorization__item">
            <label>Name</label>
            <Input value={name} setValue={setName} type="text" placeholder="Enter your full name" />
          </div>

          <div className="authorization__item">
            <label>Email</label>
            <Input value={email} setValue={setEmail} type="email" placeholder="Enter your email" />
          </div>

          <div className="authorization__item">
            <label>Password</label>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password" />
          </div>

          <PrimaryButton onClick={() => registration(name, email, password)}>Create Account</PrimaryButton>
        </div>
        <div className="authorization__login">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
