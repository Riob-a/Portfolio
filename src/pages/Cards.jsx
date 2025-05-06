import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CardGrid = () => {
  const cards = [
    {
      title: "Card One",
      text: "This is the first card.",
    },
    {
      title: "Card Two",
      text: "This is the second card.",
    },
    {
      title: "Card Three",
      text: "This is the third card.",
    },
    {
      title: "Card Four",
      text: "This is the fourth card.",
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
