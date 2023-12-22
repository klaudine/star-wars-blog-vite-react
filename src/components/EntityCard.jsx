import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import cardDefault from '../assets/cardDefault.svg'

function EntityCard() {
  return (
    <Container>
      <Row>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardDefault} />
                <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title
                </Card.Text>
                <Button variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
  );
}

export default EntityCard;