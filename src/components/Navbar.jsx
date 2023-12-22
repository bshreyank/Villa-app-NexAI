import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={require('./images/email-icon.png')}
            width="30"
            height="30"
            className="d-inline-block align-top mt-1"
            style={{marginLeft:"150px"}}
            alt=""
          />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                info@company.com
              </a>
            </li>
            <li className="nav-item">
              
              <a className="nav-link" href="#" >
              <img
            src={require('./images/info-icon-03.png')}
            width="30"
            height="30"
            className="d-inline-block align-top mt-1 mx-3"
            alt=""
          />
                Sunny Isles Beach, FL 33160
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
