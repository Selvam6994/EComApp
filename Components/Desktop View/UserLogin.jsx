import { Button, Paper } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const UserLogin = () => {
 
  // existing user log in validation
  const logInValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter valid email")
      .required("Email is required!"),
    password: yup
      .string("Enter your password")
      .min(8, "Min 8 characters is required")
      .required("Password is required"),
  });

  const logInFormFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="accountPage">
      <div className="loginSection">
        <form
          className="loginFormPaper"
          onSubmit={logInFormFormik.handleSubmit}
        >
          <Paper
            elevation={4}
            className="loginFormPaper"
            sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <span className="formTitle">Existing User?</span>
            <span className="formTitle">Log In</span>
            <TextField
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="standard"
              onChange={logInFormFormik.handleChange}
              onBlur={logInFormFormik.handleBlur}
              error={
                logInFormFormik.touched.email &&
                Boolean(logInFormFormik.errors.email)
              }
              helperText={
                logInFormFormik.touched.email && logInFormFormik.errors.email
              }
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="standard"
              onChange={logInFormFormik.handleChange}
              onBlur={logInFormFormik.handleBlur}
              error={
                logInFormFormik.touched.password &&
                Boolean(logInFormFormik.errors.password)
              }
              helperText={
                logInFormFormik.touched.password &&
                logInFormFormik.errors.password
              }
            />
            <Button type="submit">Log In</Button>
            <Link to="/account/signUp">
              <Button type="submit">New User?</Button>
            </Link>
          </Paper>
        </form>
      </div>

      
    </div>
  );
};

export default UserLogin;
