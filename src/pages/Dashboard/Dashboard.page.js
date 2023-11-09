import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import {PageBreadcrum   } from "../../components/breadcrum/breadcrum.comp.js";

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrum page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Button variant='info' style={{ 'fontSize': '2rem', 'padding': '10px 30px' }}>Add new Tickets</Button>
                </Col>
            </Row>

            <Row>
                <Col className='text-center mb-2'>
                    <div>Total Tickets: 50</div>
                    <div>Pending Tickets: 5</div>
                </Col>
            </Row>

            <Row>
                <Col className='mb-2'>
                    Recently added tickets
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='recent-ticket'>
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    );
};
