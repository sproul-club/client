import React from "react";

import './signup.css';
import Form from 'react-bootstrap/Form';

const SignUpOne = ({ navigation }) => {

  const { previous, next } = navigation;

  return (
      <div className="stepOne">
        <Form className="inputs">
            <Form.Group controlId="categories">
                <Form.Control type="categories" className="userInput" placeholder="Add up to 3 category tags"/>
            </Form.Group>
            <Form.Group controlId="appreq">
                <Form.Control type="appreq" className="userInput" placeholder="Select application requirements" />
            </Form.Group>
            <Form.Group controlId="memstat">
                <Form.Control type="memstat" className="userInput" placeholder="Select membership status" />
            </Form.Group>
        </Form>
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
      </div>
  );
};

export default SignUpOne;