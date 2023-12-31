import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
const UserSignUp = () => {
    const [emailForm,setEmailForm] = useState(true);
  const [otpForm, setOtpForm] = useState(false);
  // sign up validation
  const signUpValidationScheme = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter valid email")
      .required("Email is required!"),
  });

  const signUpFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpValidationScheme,
    onSubmit: async (values) => {
      try {
        const sendOtp = await fetch(
          "http://localhost:4000/signup/verify/email",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (sendOtp.status == 200) {
          setOtpForm(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  //   otp form validation
  const otpValidationSchema = yup.object({
    otp: yup
      .string("Enter your otp")
      .matches(/^[0-9]+$/, "Must be only numbers")
      .min(4, "Must be exactly 4 numbers")
      .max(4, "Must be exactly 4 numbers")
      .required("required!"),
  });

  const otpFormFormik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpValidationSchema,
    onSubmit: async (values) => {
      try {
        const verifyOtp = await fetch(
          "http://localhost:4000/signup/verify/otp",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: values,
          }
        );
        if (verifyOtp.status == 201) {
          setOtpForm(false);
        }
      } catch (error) {
        console.log(error,"hi");
      }
    },
  });
  // password setup validation
  const passwordFormValidation = yup.object({
    name: yup.string().required("User name is required"),
    newPassword: yup.string().required("Enter new password"),
    confirmPassword: yup.string().required("Re-enter your password"),
  });

  const setPasswordFormik = useFormik({
    initialValues: {
      name: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: passwordFormValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="accountPage">
      {otpForm == false &&emailForm==true ? (
        <div className="signUpSection">
          <form
            onSubmit={signUpFormik.handleSubmit}
            className="SignUpFormPaper"
          >
            <Paper
              elevation={4}
              className="SignUpFormPaper"
              sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <span className="formTitle">New User?</span>
              <span className="formTitle">Sign Up</span>
              <TextField
                id="email"
                label="Email"
                name="email"
                type="email"
                variant="standard"
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                error={
                  signUpFormik.touched.email &&
                  Boolean(signUpFormik.errors.email)
                }
                helperText={
                  signUpFormik.touched.email && signUpFormik.errors.email
                }
              />

              <Button type="submit"> Verify Email</Button>
            </Paper>
          </form>
        </div>
      ) : (
        <div className="signUpSection">
          <form
            onSubmit={otpFormFormik.handleSubmit}
            className="SignUpFormPaper"
          >
            <Paper
              elevation={4}
              className="SignUpFormPaper"
              sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <span className="formTitle">Verify OTP</span>
              <TextField
                id="otp"
                label="Enter the OTP"
                name="otp"
                type="password"
                variant="standard"
                onChange={otpFormFormik.handleChange}
                onBlur={otpFormFormik.handleBlur}
                error={
                  otpFormFormik.touched.otp && Boolean(otpFormFormik.errors.otp)
                }
                helperText={
                  otpFormFormik.touched.otp && otpFormFormik.errors.otp
                }
              />

              <Button type="submit"> Verify OTP</Button>
            </Paper>
          </form>
        </div>
      )}
      <div className="signUpSection">
        <form onSubmit={otpFormFormik.handleSubmit} className="SignUpFormPaper">
          <Paper
            elevation={4}
            className="SignUpFormPaper"
            sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <span className="formTitle">Verify OTP</span>
            <TextField
              id="name"
              label="User name"
              name="name"
              type="text"
              variant="standard"
              onChange={otpFormFormik.handleChange}
              onBlur={otpFormFormik.handleBlur}
              error={
                otpFormFormik.touched.otp && Boolean(otpFormFormik.errors.otp)
              }
              helperText={otpFormFormik.touched.otp && otpFormFormik.errors.otp}
            />
            <TextField
              id="newPassword"
              label="Set New Password"
              name="newPassword"
              type="text"
              variant="standard"
              onChange={otpFormFormik.handleChange}
              onBlur={otpFormFormik.handleBlur}
              error={
                otpFormFormik.touched.otp && Boolean(otpFormFormik.errors.otp)
              }
              helperText={otpFormFormik.touched.otp && otpFormFormik.errors.otp}
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="text"
              variant="standard"
              onChange={otpFormFormik.handleChange}
              onBlur={otpFormFormik.handleBlur}
              error={
                otpFormFormik.touched.otp && Boolean(otpFormFormik.errors.otp)
              }
              helperText={otpFormFormik.touched.otp && otpFormFormik.errors.otp}
            />

            <Button type="submit"> Sign Up</Button>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
