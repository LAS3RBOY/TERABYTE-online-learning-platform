import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from '../Theme/DarkModeContext';
import { useAuth } from '../Users/AuthContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <>
      <div style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? '#fff' : 'black' }}>
        <nav className="navbar navbar-expand-lg navbar-custom border-bottom border-dark-subtle" >
          <div className="container">

            <Link className={`navbar-brand mx-1 brand-name ${isDarkMode ? 'active-dark' : 'active-light'}`} style={{ textShadow: isDarkMode ? "2px 2px 30px #de33b6" : 'none' }} to="/">TERA | BYTE</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto align-items-center ">

                

                <li className="nav-item mx-3">
                  <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/course">Course</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/roadmap">Roadmap</Link>
                </li>

                <li className="nav-item mx-3 ">
                  <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/quiz">Quiz</Link>
                </li>

                <li className="nav-item mx-3 ">
                  <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/Compiler">Compiler</Link>
                </li>
                <div onClick={toggleDarkMode} >{isDarkMode ? <FaSun size={25} /> : <FaMoon size={25} />}</div>
                {isLoggedIn ? (
                  <>
                    {user && user.name && ( // Check if user exists and has a 'name' property
                      <li className="nav-item ms-3 me-0">
                        <span className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`}>
                          Welcome {user.name}
                        </span>
                      </li>
                    )}
                    <li className="nav-item ms-3 me-0">
                      <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <div className="login-signup d-flex">
                      <li className="nav-item ms-3 me-0">
                        <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/login">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item ms-1 me-0">
                        <Link className={`nav-link active ${isDarkMode ? 'active-dark' : 'active-light'}`} to="/register">
                          Register
                        </Link>
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar