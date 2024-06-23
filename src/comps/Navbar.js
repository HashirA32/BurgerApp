import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg   myNavStyle " >
  <div className="container-fluid myNavStyle">
  <a className="navbar-brand" href="/">
      <img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt="Bootstrap" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-underline me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="nav nav-underline">
  <li className="nav-item">
    <Link className="nav-link Login active" aria-current="page" to="/">Burger Builder</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link Login" aria-current="page" to="/LogInPage">Login</Link>
  </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}