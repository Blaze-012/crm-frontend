import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrum } from '../../components/breadcrum/breadcrum.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

const ticket = tickets[0];

export const Ticket = () => {
    const [message, setMessage] = useState('');

    useEffect(() => { }, [message]);

    const handleOnChange = e => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = () => {
        alert('Form submitted!');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrum page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className='font-weight-bolder text-secondary'>
                    <div className='subjdect'>Subject: {ticket.subject}</div>
                    <div className='date'>Ticket Opened: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-info'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <UpdateTicket msg={message}
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit} 
                        />
                </Col>
            </Row>
        </Container>
    );
};
