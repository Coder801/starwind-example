import { Container, Row, Col } from "react-bootstrap";

import { Items } from "./components/Items";
import { Info } from "./components/Info";
import { RealTimeChart } from "./components/RealTimeChart";

function App() {
  return (
    <Container className="p-4" style={{ maxWidth: "100%" }}>
      <Row className="mb-4">
        <Col>
          <RealTimeChart />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Info />
        </Col>
        <Col md={6} className="mb-4">
          <Items />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
