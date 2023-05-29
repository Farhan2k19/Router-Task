import React from 'react'
import Header from '../Components/Header'
import{Outlet,Link} from 'react-router-dom'


function Home() {
  return (
    
    <>

    <Header/>
    <h1>This is Home page</h1>
    <Link to="/about">About</Link>
    <br/>

    <Link to="/contact">Contact</Link>
    <br/>

    <Link to="/services">Services</Link>


    </>

  )
}

export default Home
