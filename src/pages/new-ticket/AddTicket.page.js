import React, { useState, useEffect} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import { PageBreadcrum } from '../../components/breadcrum/breadcrum.comp';
import { AddTicketForm } from '../../Layout/add-ticket-form/AddTicketForm.comp';

const initialFrmDt = {
	subject: "",
	issueDate: "",
	detail: "",
};

export const AddTicket = () => {

	const [frmData, setFrmData] = useState(initialFrmDt);
	
	
	useEffect(() => { }, [frmData]);


	const handleOnchange = e => {
		const { name, value } = e.target

		setFrmData({
			...frmData,
			[name]: value
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		console.log("Form submit request received", frmData);
	}

  return (
      <Container>
          <Row>
              <Col>
                  <PageBreadcrum page={"New Ticket"}/>
              </Col>
          </Row>

          <Row>
              <Col>
					<AddTicketForm
						handleOnchange={handleOnchange}
						handleOnSubmit={handleOnSubmit}
						frmDt={frmData}
									/>
              </Col>
          </Row>
    </Container>
  )
}
