import { Card, ListGroup } from "react-bootstrap";

export const Items = () => {
  return (
    <Card>
      <Card.Header>Avaliable Items</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
