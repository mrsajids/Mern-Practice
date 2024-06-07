
import { Card, ProgressBar } from 'react-bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatusCard from './StatusCard';

const CardsDesigns = () => {
    return (
        <Container>
        <Row>
          <Col>
            <StatusCard title="RAM" logo={'ramLogo'} value={70} variant="success" />
          </Col>
          <Col>
            <StatusCard title="Processor" logo={'processorLogo'} value={55} variant="warning" />
          </Col>
          <Col>
            <StatusCard title="Processes" logo={'processesLogo'} value={30} variant="info" />
          </Col>
          <Col>
            <StatusCard title="Service" logo={'serviceLogo'} value={85} variant="danger" />
          </Col>
        </Row>
      </Container>
    )
}
export default CardsDesigns