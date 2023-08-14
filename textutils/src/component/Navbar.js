import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Navbar(props) {
  return (   
        <nav className="navbar navbar-light bg-light ">
          <span className="navbar-brand mb-0 h1 mx-5 ">{props.title}</span>
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