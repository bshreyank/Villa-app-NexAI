import React from 'react'
import './CSS/VideoView.css'

import { Container, Row, Col} from 'react-bootstrap'

const VideoView = () => {
  return (
    <div className="container__video">
      <div className="videoView__back">
        <h1>Get Closer View & Different Feeling</h1>
      </div>
      <div className="videoView__video">
        <img src={require('./images/video-frame.jpg')} alt="feature-img" />
      </div>
    </div>
  )
}

export default VideoView
