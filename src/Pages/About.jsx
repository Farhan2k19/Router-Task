import React from 'react'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <h1>This is about page</h1>
      <Link to="/">Home</Link>
        <br/>

        <Link to="/contact">Contact</Link>
        <br/>

        <Link to="/services">Services</Link>

    </div>
  )
}

export default About
