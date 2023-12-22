import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <>
      <header>
        {/* <img className="logo" src="images/logo.svg" alt="LOGO" /> */}
        <h1 className="logo">VILLA</h1>

        <nav>
          <ul className="nav__links" style={{listStyle:'none'}}>
            <li>
              <a color='orange'>Home</a>
            </li>
            <li>
              <a>Properties</a>
            </li>
            <li>
              <a>Property Details</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
        <span className='schedule'></span>
      </header>
    </>
  )
}

export default Header
