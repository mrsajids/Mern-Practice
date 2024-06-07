// src/SystemStatusCard.js
import React from 'react';
import { Card,Row,Col, ProgressBar } from 'react-bootstrap';
import ramLogo from './favicon.ico'; // Placeholder path for RAM logo
import processorLogo from './favicon.ico'; // Placeholder path for Processor logo
import processesLogo from './favicon.ico'; // Placeholder path for Processes logo
import servicesLogo from './favicon.ico'; // Placeholder path for Services logo
import './SystemStatusCard.css'; // Custom CSS file

const SystemStatusCard = ({ ram, processor, processes, services }) => {
  return (
    <Card className="shadow-sm rounded" style={{ width: '24rem', border: 'none' }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">System Status</Card.Title>
        <Row className="align-items-center mb-3">
          <Col xs={2} className="text-center">
            <img src={ramLogo} alt="RAM Logo" className="status-logo" />
          </Col>
          <Col xs={10}>
            <h6 className="mb-1">RAM</h6>
            <ProgressBar now={ram} label={`${ram}%`} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="align-items-center mb-3">
          <Col xs={2} className="text-center">
            <img src={processorLogo} alt="Processor Logo" className="status-logo" />
          </Col>
          <Col xs={10}>
            <h6 className="mb-1">Processor</h6>
            <ProgressBar now={processor} label={`${processor}%`} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="align-items-center mb-3">
          <Col xs={2} className="text-center">
            <img src={processesLogo} alt="Processes Logo" className="status-logo" />
          </Col>
          <Col xs={10}>
            <h6 className="mb-1">Processes</h6>
            <ProgressBar now={processes} label={`${processes}%`} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="align-items-center mb-3">
          <Col xs={2} className="text-center">
            <img src={servicesLogo} alt="Services Logo" className="status-logo" />
          </Col>
          <Col xs={10}>
            <h6 className="mb-1">Services</h6>
            <ProgressBar now={services} label={`${services}%`} className="progress-bar-custom" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SystemStatusCard;

