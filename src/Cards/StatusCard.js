// StatusCard.js
import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const StatusCard = ({ title, logo, value, variant }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={logo} style={{ height: '100px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ProgressBar now={value} label={`${value}%`} variant={variant} />
      </Card.Body>
    </Card>
  );
};

export default StatusCard;
