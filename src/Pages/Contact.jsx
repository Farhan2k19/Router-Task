import React from 'react'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
      
      <Header/>
        <h1>This is contact page</h1>
      <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>

        <Link to="/services">Services</Link>

    </div>
  )
}

export default Contact
