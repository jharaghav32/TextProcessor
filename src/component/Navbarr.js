import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarr () {
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="/">TextUtility</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
    </form>
  </div>
</nav>

</div>
    )
    
}
