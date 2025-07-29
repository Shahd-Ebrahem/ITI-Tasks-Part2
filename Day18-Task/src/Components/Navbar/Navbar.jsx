import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
    return ( 
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to={'/parent'}>Parent</NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to={'/send'}role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Send
          </NavLink> 

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" to={'/About'}aria-disabled="true">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to={'/effect'}aria-disabled="true">Effect</NavLink>
        </li>


      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
)
}
