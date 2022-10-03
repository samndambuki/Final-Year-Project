import React, { useContext, useRef, useState } from "react";
import { Button,Col,Row,Container, Form, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseSetup";

function AuthForm() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } 
    
    catch (error) {
      console.error(error);

    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      history.push('/landing');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Outspan Hospital Online Consulatation System</Navbar.Brand>
      </Navbar>
      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>
          <Form className="mt-4">

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>

            <Form.Group className="mt-2">
                <Row>
    
              <Col xs={6}>
                <Button onClick={createAccount} type="button" className="block" >
                  Sign Up
                </Button>
              </Col>

              <Col xs={6}>
                <Button
                  onClick={signIn}
                  type="button"
                  variant="warning"
                  className="block"
                >
                  Sign In
                </Button>
              </Col>

              </Row>
            </Form.Group>
            
          </Form>
        </Container>
      ) : (
        <h2 className="mt-4 text-center">Welcome {user.email}</h2>
      )}
    </>
  );
}

export default AuthForm;