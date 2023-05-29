import React from 'react'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'

function Services() {
  return (
    <div>
      <Header />
        <h1>This is services page</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/contact">Contact</Link>

    </div>
  )
}

export default Services
