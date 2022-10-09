import React, { useContext, useRef, useState } from "react";
import { Button, Col, Row, Container, Form, Navbar, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseSetup";

function AuthForm() {
  const user = useContext(AuthContext);


  const [activeForm, setActiveForm] = useState("SignUp")
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [signInErrorMsg, setSignInErrorMsg] = useState("");
  const [signUperrorMsg, setSignUpErrorMsg] = useState("");

  const history = useHistory();

  const createAccount = async (e: any) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      history.push('/landing');
    }

    catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setSignUpErrorMsg("Eamil already registered")
          break;
        case "auth/weak-password":
          setSignUpErrorMsg("Password should be at least 6 characters ")
          break;
        case "auth/invalid-email":
          setSignUpErrorMsg("Invalid Email ")
          break;
        default:
          setSignUpErrorMsg(error.message)
          break;
      }
      console.log(error.code)
    }
  };

  const signIn = async (e: any) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      history.push('/landing');
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setSignInErrorMsg("User not found")
          break;
        case "auth/wrong-password":
          setSignInErrorMsg("Wrong Password")
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Outspan Hospital Online Consulatation System</Navbar.Brand>
      </Navbar>

      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>

          {activeForm == "SignUp" ?

            <div>
              <h3>Sign Up</h3>
              {signUperrorMsg && <Alert variant="danger" onClose={() => setSignUpErrorMsg("")} dismissible >{signUperrorMsg}</Alert>}

              <Form className="mt-4" onSubmit={createAccount}>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-2">
                  <Row>

                    <Col xs={6}>
                      <Button type="submit" variant="primary">
                        Sign Up
                      </Button>
                    </Col>

                  </Row>
                </Form.Group>

              </Form>
            </div>
            :
            <div>
              <h3>Log In</h3>
              {signInErrorMsg && <Alert variant="danger" onClose={() => setSignInErrorMsg("")} dismissible >{signInErrorMsg}</Alert>}
              <Form className="mt-4" onSubmit={signIn}>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-2">
                  <Row>

                    <Col xs={6}>
                      <Button

                        type="submit"
                        variant="warning"
                        className="block"
                      >
                        Log In
                      </Button>
                    </Col>

                  </Row>
                </Form.Group>

              </Form>
            </div>
          }
          <div style={{padding:"10px", marginTop:"30px"}}>
            {activeForm == "SignUp" ? <Button variant="secondary" onClick={()=>setActiveForm("Login")} >Go to Login</Button> : <Button onClick={()=>setActiveForm("SignUp")} size="sm" variant="secondary" >Go to Sign Up</Button>}
          </div>
        </Container>
      ) : (
        <h2 className="mt-4 text-center">Welcome {user.email}</h2>
      )}
    </>
  );
}

export default AuthForm;