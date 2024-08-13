import React,{useState} from "react";
import "./Signinform.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm } from "formik";
import * as yup from "yup";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Signinform = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values, "==Formvalues");
    setLoading(true)
    try{
      // const response = await axios.post("",values)
      console.log("res");
      // localStorage.setItem('token', response.data.token);
      // const data = await response.json();

      // if (response.ok) {
      //   navigate('/dashboard');
      // } else {
      //   console.error('Login failed:', data);
      // }

    }catch(e){
      setError('Login failed. Please check your credentials.');
      console.error("signIn error",e)}finally{setLoading(false)}
    resetForm();
  };

  return (
    <div className="Signinform">
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
                        <h5>SignIn Form</h5>
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
                        <Button type="submit" size="small" className="my-2" disabled={loading}>
                         {loading ? "Sign In..." : "Sign In"} 
                        </Button>
                        {error && <p>{error}</p>}
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

export default Signinform;
