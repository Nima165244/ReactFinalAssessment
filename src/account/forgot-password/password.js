import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Password = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const initialValues = {
    username: "",
    password: "",
    confirmpassword: "",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const [ssuccess, setSSuccess] = useState("");
  const click = () => {
    console.log("Submited");
    setSSuccess("Submitted successfully");
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter username"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      )
      .min(8, "Password should contain atleast 8 characters")
      .required("Enter your password"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Confirm password is required"),
  });
  const btnStyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Set Password</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                type="password"
                name="confirmpassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <br></br>
              <br></br>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnStyle}
                fullWidth
                disabled={!props.isValid}
                onClick={click}
              >
                Submit
              </Button>
              <div>{ssuccess}</div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Password;
