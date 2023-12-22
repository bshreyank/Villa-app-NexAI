import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'

function BasicExample() {
  return (
    <div style={{height:"110vh",gap:"5"}}>
    <Container>
      <Row>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-01.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-02.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-03.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-04.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-05.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./images/property-06.jpg')} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BasicExample
