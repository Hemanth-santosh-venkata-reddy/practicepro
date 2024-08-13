import React,{useState} from "react";
import "./Signupform.css"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios"

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  // phonenumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

const Signupform = () => {

  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async(values, { resetForm }) => {
    console.log(values,"==valuesform");
    setLoading(true)
    try{console.log("res");}catch(e){
      setError('Sign-in failed. Please check your credentials.');
      console.error("Login error",e)}finally{setLoading(false)}
    resetForm();
  };
  return (
    <div className="Signupform">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card className="p-3">
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <FormikForm noValidate>
                    <Row>
                      <Col lg={12}>
                        <h5>SignUp Form</h5>
                      </Col>

                      <Form.Group as={Col} lg="12">
                        <Form.Label>Email</Form.Label>
                        <Field
                          type="email"
                          name="email"
                          as={Form.Control}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} lg="12">
                        <Form.Label>Password</Form.Label>
                        <Field
                          type="password"
                          name="password"
                          as={Form.Control}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Col lg={12}>
                        <Button type="submit" size="small" disabled={loading} className="my-2">
                          {loading ? "Submit Login..." : "Submit Login"} 
                        </Button>
                        {error && <p>{error}</p>}
                      </Col>
                      <Col lg={3}>
                      <Link to="/signinform">Sign in</Link>
                      </Col>
                    </Row>
                  </FormikForm>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signupform;
