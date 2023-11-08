import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../../pages/Entry/Entry.style.css"; // Import the CSS file
import PropTypes from 'prop-types';

const ResetPassword = ({handleOnchange, handleOnResetSubmit,formSwitcher, email}) => {
  return (
    <Container className="entry-page">
      <Row>
        <Col>
          <div className="box">
            <div className="form-container">
              <h1 className="form-header">Reset Password</h1>
              <hr />
              <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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

                <Button type="submit" className="submit-button">
                  Reset Password
                </Button>

                <div className="forgot-password-link">
                  <a href="#!" onClick={()=>{formSwitcher('login')}}>Login Now!</a>
                </div>
              </Form>
            </div>
          </div>
        </Col> 
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};


export default ResetPassword;
