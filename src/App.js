import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Name from "./Name";
import Summary from "./Summary";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col xs={6} md={4}>
          <Name />
        </Col>
        <Col xs={6} md={8}>
          <Summary />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
