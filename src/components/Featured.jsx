import React from 'react'
import './CSS/Featured.css'

import { Container, Row, Col, Card, ListGroup, Stack } from 'react-bootstrap'

const Featured = () => {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div>
              <img src={require('./images/featured.jpg')} alt="feature-img" />
            </div>
            <div className="feature__image">
              <img
                src={require('./images/featured-icon.png')}
                alt="feature-img"
              />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div
              style={{
                backgroundColor: 'orange',
                height: '20px',
                width: '10px',
              }}
            >
              <p style={{ paddingLeft: '20px' }}>FEATURED</p>
            </div>
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '50px' }}>Best</h1>
              <h1 style={{ fontSize: '50px' }}>Apartment &</h1>
              <h1 style={{ fontSize: '50px' }}>Sea View</h1>
            </div>

            <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">
                <ListGroup.Item>Best useful links ?</ListGroup.Item>
                <ListGroup.Item>
                  Get <b>the best villa</b> website template in HTML CSS and
                  BootStrap for your business. TemplateMo Provides you the best
                  free CSS Templates in the world. Please tell your friend about
                  it{' '}
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col xs={12} md={4} className="feature__back">
            <Stack gap={5}>
              <div className="p-2">
                <img
                  src={require('./images/info-icon-01.png')}
                  alt="feature-img"
                  style={{ height: '50px', width: '60px' }}
                />
              </div>
              <div className="p-2">
                <img
                  src={require('./images/info-icon-02.png')}
                  alt="feature-img"
                  style={{ height: '50px', width: '60px' }}
                />
              </div>
              <div className="p-2">
                <img
                  src={require('./images/info-icon-03.png')}
                  alt="feature-img"
                  style={{ height: '50px', width: '60px' }}
                />
              </div>
              <div className="p-2">
                <img
                  src={require('./images/info-icon-04.png')}
                  alt="feature-img"
                  style={{ height: '50px', width: '60px' }}
                />
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Featured
