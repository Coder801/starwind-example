import { Card, ListGroup } from "react-bootstrap";

export const Items = () => {
  return (
    <Card>
      <Card.Header>Avaliable Items</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
          <ListGroup.Item>Item 6</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
