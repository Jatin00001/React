import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation"
      ><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.home}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.contact}
            </a>
          </li>
          </ul>
      </div>
    </div>
  </nav>
  )
}



Navbar.propTypes = {title:PropTypes.string.isRequired,
                    about:PropTypes.string,
                    contact:PropTypes.string
}
Navbar.defaultProps = {
    // title : "Set Titile Here.....",
    about: "Set About Here......",
    contact : "Set conatct here.....",
    home: "Set home section"
}