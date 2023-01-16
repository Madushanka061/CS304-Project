import React from "react";
import FormInput from "../../components/FormInputs/FormInput";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Valid Email Address",
      label: "email",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Should contaion 8-20 charactors! ",
      label: "Password",
      pattern: "[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z!@#$%^&*()_+]{8,20}",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div>
      <div className="regform">
        <form onSubmit={handleSubmit}>
          <h1>LogIn</h1>
          <h2>Login to your account</h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button variant="outline-primary">LogIn</Button>{" "}
          <h6 style={{ marginBottom: "20px" }}><a href="">Fogot Password?</a></h6>
        </form>
      </div>
    </div>
  );
}

export default Login;
