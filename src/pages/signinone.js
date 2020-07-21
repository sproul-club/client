import React from "react";

import './signup.css';
import Form from 'react-bootstrap/Form';

const SignInOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
      <div className="form">
        <Form className="inputs">
            <Form.Group controlId="clubname">
                <Form.Control type="clubname" className="userInput" placeholder="Club Name"/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Control type="email" className="userInput" placeholder="Email address - use the organization's email" />
            </Form.Group>
            <Form.Group controlId="pw">
                <Form.Control type="password" className="userInput" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="confirm">
                <Form.Control type="password" className="userInput" placeholder="Confirm password" />
            </Form.Group>
        </Form>
        <div>
            <button onClick={next}>Next</button>
        </div>
      </div>
  );
};

export default Names;