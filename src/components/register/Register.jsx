import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { setUserphoto, setUsername, createUser, setUser, user } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    if (password.length < 6) {
      setError("more than 6 password");
      return;
    } else if (email && password) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setUser(createdUser);
          setUsername(name);
          setUserphoto(photo);
          setError("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container className="w-50 mx-auto p-5 border border-5 border-warning rounded rounded-4">
      <h3>Register</h3>
      <div>
        {error ? (
          <p className="text-danger">Add 6 character at least password</p>
        ) : (
          <p>{""}</p>
        )}
      </div>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="warning" type="submit">
          Register
        </Button>
        <br />
        <br />
        <Form.Text className="text-secondary">
          Already have an Account?{" "}
          <Link to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
