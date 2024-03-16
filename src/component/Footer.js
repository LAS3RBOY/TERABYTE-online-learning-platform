import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaHome, FaRegCopyright, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useDarkMode } from './Theme/DarkModeContext';



const Footer = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <div className="p-5" style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
                <div className="border-0 ">
                    <div className="card-body">
                        <div className="row m-0">
                            <div className="col d-flex justify-content-between ">
                                <div className="text">Get connected with us on social networks:</div>
                                <div className="icon">
                                    <a href='https://www.facebook.com/profile.php?id=100032514576398'><FaFacebookSquare size={25} className='mx-3' style={{ color: "blue" }} /></a>
                                    <a href="https://instagram.com/1amnotreal_?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagramSquare size={25} style={{ color: "#fa9202" }} /></a>
                                    <a href="https://www.linkedin.com/in/sahil-gupta-b94134202/" ><FaLinkedin size={25} className='mx-3' style={{ color: "blue" }} /></a>
                                    <a href="https://github.com/LAS3RBOY"><FaGithub size={25} style={{ color: isDarkMode ? 'white' : "black" }} /></a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row m-0">
                            <div className="col">
                                <div className="h4 text-center" style={{ textShadow: isDarkMode ? "2px 2px 30px #de33b6" : 'none' }}>TERABYTE</div>
                                <p style={{ fontWeight: "bold", textAlign: "justify" }} className=''>
                                    TERABYTE is an online learning platform for code-related courses, designed to help students learn from the best instructors and master the skills they need to succeed in the tech industry.
                                </p>
                            </div>
                            <div className="col text-center">
                                <div className="h4 text-center">Use Full Links</div>
                                <Link to="/" style={{ textDecoration: "none" }}><span style={{ color: "#090109" }}>Home</span></Link> <br />
                                <Link to="/course" style={{ textDecoration: "none" }}><span style={{ color: "#090109" }}>Course</span></Link> <br />
                                <Link to="/quiz" style={{ textDecoration: "none" }}><span style={{ color: "#090109" }}>Quiz</span></Link>
                            </div>
                            <div className="col text-center ">
                                <div className="h4">Contact Us</div>
                                <p><FaHome size={20} /> - Mumbai (400097)</p>
                                <p><FiMail size={20} /> - sahilgupta1107@gmail.com</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row m-0">
                            <div className="col text-center ">
                                <FaRegCopyright size={20} /> <span> Copyright: TERABYTE 2023 | Sahil Gupta</span> <br />
                                <FaRegCopyright size={20} /> <span>Content Copyright: <a href="https://www.w3schools.com" style={{ textDecoration: "none", color: "black" }}>W3Schools</a> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer


// aj885829@gmail.com
