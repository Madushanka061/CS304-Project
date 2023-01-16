import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import FormInput from '../../components/FormInputs/FormInput';


function Register() {
     const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    contactno: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      errorMessage: "Should not contain any special charactor!",
      label: "Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Should not contain any special charactor!",
      label: "Lastname",
      required: true,
    },

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
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "",
      label: "Address",
    },

    {
      id: 5,
      name: "contactno",
      type: "text",
      placeholder: "07********",
      errorMessage: "Valid contact Number",
      label: "Contact Number",
      pattern: "/^[]?[(]?[0-9]{3}[)]?[-.]?[0-9]{3}[-.]?[0-9]{4,6}$/im",
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

    {
      id: 7,
      name: "confirmpassword",
      type: "password",
      placeholder: "Re-enter your password",
      errorMessage: "Password is'nt match!",
      label: "Confirmpassword",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values)
  return (
    <div>
        
         <div className="regform">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <h2>Sign Up to your account</h2>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Button variant="outline-primary">SignUp</Button>{" "}
            <h6 style={{ marginBottom: "20px" }}><a href="">Alredy have an account?</a></h6>
          </form>
        </div>
        
    </div>
  )
}

export default Register