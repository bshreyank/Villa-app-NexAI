import React from 'react'
import './CSS/Contact.css'

import { Container, Row, Col} from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="container__contact">
      <div className="contact__back">
        <h1>Get In Touch With Our Agents</h1>
      </div>
      <div className="contact__video">
        <img src={require('./images/video-frame.jpg')} alt="feature-img" />
      </div>
    </div>
  )
}

export default Contact
