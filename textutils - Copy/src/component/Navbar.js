import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Navbar(props) {
  return (   
     
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation"
            ><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Contact
                  </a>
                </li>
                </ul>
                {/* backtick(``) using them called template literalls */}
                <div className={`form-check form-switch text-${ props.mode === 'light'? 'dark':'light' }  `}>  
                  {/* me change id for this btn */}
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="checkbox_id" />
                  <label className="form-check-label"  htmlFor="checkbox_id">Enable Dark Mode</label>
                </div>
            </div>
          </div>
        </nav>
       
  );
}



Navbar.propTypes={
    title:PropTypes.string.isRequired,
    About:PropTypes.string.isRequired,   // is required when no props is pass then error happened but default props hona nahi chaiye!!
}
Navbar.defaultProps = {
    title:"enter titile",
    About:"About"
}