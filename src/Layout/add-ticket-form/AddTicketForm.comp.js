import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./AddTicketForm.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnchange, frmDt }) => {
    
  console.log(frmDt); 
  return (
    <Container className="mt-3 bg-light add-new-effect">
      <h1 className='text-info text-center'>
        Add New Ticket
      </h1>
      <hr />
      <Row>
        <Col>
          <div className="box">
            <div className="form-container">
              <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
                            onChange={handleOnchange}
                            placeholder="Subject"
                            required
                            />
                    </Col>

                </Form.Group>

                <Form.Group as={Row}>
                <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                                  type="date"
                                  name="issueDate"
                                  value={frmDt.issueDate}
                                  onChange={handleOnchange}
                                  required
                                  />          
                    </Col> 
                                  
                </Form.Group>
                <Form.Group>
                  <Form.Label>Details</Form.Label>
                                  <Form.Control
                                      as="textarea"
                                      name="detail"
                                      value={frmDt.detail}
                                      rows="5"
                                      onChange={handleOnchange}
                                      required
                                      />
                </Form.Group>

                {/* <Button type="submit" variant='info'>
                  Login
                </Button> */}

                <div className="d-grid gap-2">
                  <Button type="submit" variant="info" size="lg">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
};
