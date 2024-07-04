import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const { error, setError, signIn, setUser, user, auth } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const Gprovider = new GoogleAuthProvider();

  const googleLogin = () => {
    signInWithPopup(auth, Gprovider)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        navigate(from, { replace: true });
        console.log(newUser);
      })
      .catch((err) => console.log(err.message));
  };

  const Gitprovider = new GithubAuthProvider();

  const handleGit = () => {
    signInWithPopup(auth, Gitprovider)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password === "" || email === "") {
      setError("cannot be field empty");
      return;
    }

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("wrong email");
      });
  };

  return (
    <Container className="text-center w-25 mx-auto p-5 border border-5 border-warning rounded rounded-4">
      <h3>Login</h3>
      {error ? <h6>{error}</h6> : <></>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="border-danger"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="border-danger"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-50 mb-2" variant="warning" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <div>
        <div className="mt-4">
          {" "}
          <button className="w-50 btn btn-warning" onClick={googleLogin}>
            Login with Google
          </button>
        </div>
        <div className="mt-3">
          <button onClick={handleGit} className="w-50 btn btn-warning">
            Login with Github
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
