import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container my-2">

          <Link className="navbar-brand mx-1 brand-name" to="/">TERA | BYTE</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item dropdown mx-3">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </a>
                <ul className="dropdown-menu navbar-custom-dropdown" style={{ backgroundColor: "#da33e6" }}>
                  <li style={{ backgroundColor: "#da33e6" }}><Link className="dropdown-item fw-bold" to="/html">HTML</Link></li>
                  <li style={{ backgroundColor: "#da33e6" }}><Link className="dropdown-item fw-bold" to="/">CSS</Link></li>
                  <li style={{ backgroundColor: "#da33e6" }}><Link className="dropdown-item fw-bold" to="/">JavaSript</Link></li>
                </ul>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/blog">What is?</Link>
              </li>

              <li className="nav-item mx-3 disabled">
                <a className="nav-link" href="/">Exercises</a>
              </li>

              {/* <li className="nav-item mx-3 disabled">
                <a className="nav-link" href="/"></a>
              </li> */}
                
            </ul>

            <div className='mx-5'>{isAuthenticated && <span> {user.name} </span>} </div>
            
            {
              isAuthenticated ?
              <Link className="ms-auto"><button type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn btn-transparent button-custom">Logout</button></Link>
              :
              <Link className="ms-auto"><button type="button" onClick={() => loginWithRedirect()} className="btn btn-transparent button-custom">Login</button></Link>
            }
            {/* <Link className="ms-auto"><button type="button" className="btn btn-transparent button-custom">SignUp</button></Link> */}
            {/* <button type="button" className="btn btn-transparent mx-2 button-custom"><Link to="/login">Login</Link></button> */}
            {/* <button type="button" className="btn btn-transparent ms-auto button-custom"><Link to="/register">SignUp</Link></button>
            <button type="button" className="btn btn-transparent mx-2 button-custom"><Link to="/login">Login</Link></button> */}
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar