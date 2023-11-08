import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../pages/Entry/Entry.style.css'; // Import the CSS file
import PropTypes from 'prop-types';

const LoginForm = ({handleOnchange,handleOnSubmit, formSwitcher, email,pass}) => {
  return (
    <Container className="entry-page">
      <Row>
        <Col>
          <div className="box">
            <div className="form-container">
              <h1 className="form-header">Client Login</h1>
              <hr />
              <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                                  <Form.Control type="email"
                                      name="email"
                                      value={email}
                                      onChange={handleOnchange}
                                      placeholder="Enter email"
                                      required
                                      />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                                  <Form.Control type="password"
                                      name="password"
                                      value={pass}
                                      onChange={handleOnchange}
                                      placeholder="Password"
                                      required
                                      />
                </Form.Group>

                <Button type="submit" className="submit-button">
                  Login
                </Button>

                <div className="forgot-password-link">
                  <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password?</a>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};


export default LoginForm;
