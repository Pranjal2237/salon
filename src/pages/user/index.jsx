import React, { useState } from "react";
import "./style.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string().required("password is required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string().required("password is required"),
});

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const User = ({user,setUser}) => {
  const [login, setLogin] = useState(true);
  const navigate=useNavigate();

  const registerUser = async (values, onSubmitProps) => {

    const savedUserResponse = await fetch(
      `http://localhost:4000/api/user/register`,
      {
        method:"POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(values)
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    // if (savedUser) {
    //   setPageType("login");
    // }
  };

  const loginUser = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(`http://localhost:4000/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
    setUser(loggedIn.user);
    console.log(loggedIn["token"])
    localStorage.setItem("token",loggedIn["token"]);
      navigate("/");
    }
  };

  const handleFormSubmit = async(values, onSubmitProps) => {
    if(login===true)
    {
        await loginUser(values, onSubmitProps)
    }
    else{
        await registerUser(values, onSubmitProps)
    }
  };

  return (
    <div>
      <div className="user-banner">
        <div className="banner-content">
          <h1>{login ? "LOGIN" : "SIGNUP"}</h1>
        </div>
      </div>
      <div className={login === false ? "container active" : "container"}>
        <div
          className={
            login ? "form-container sign-in" : "form-container sign-up"
          }
        >
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={login ? initialValuesLogin : initialValuesRegister}
            validationSchema={login ? loginSchema : registerSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              resetForm,
            }) => (
              <form onSubmit={handleSubmit}>
                <h1>{login ? "Sign In" : "Create Account"}</h1>
                {login === false && (
                  <>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <p className="error">{errors.name}</p> : null}
                  </>
                )}
                <input
                  type="email"
                  placeholder="email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
                {login === false && (
                  <>
                    <input
                      type="phone"
                      placeholder="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <p className="error">{errors.phone}</p>
                    ) : null}
                  </>
                )}
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}
                <button>{login?"Sign In":"Sign Up"}</button>
              </form>
            )}
          </Formik>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div
              className={
                login ? "toggle-panel toggle-right" : "toggle-panel toggle-left"
              }
            >
              <h1>{login ? "Hello Friend!" : "Welcome Back!"}</h1>
              <p>
                {login
                  ? "Register with your personal details"
                  : "Enter your personal details"}
              </p>
              <button
                className="hidden"
                onClick={() => {
                  setLogin(!login);
                }}
              >
                {login ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
