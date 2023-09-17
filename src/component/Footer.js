import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaHome, FaRegCopyright, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className="container" style={{ marginTop: "7rem", marginBottom:"2rem" }}>
                <div className=" mt-4 border-0 ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col d-flex justify-content-between ">
                                <div className="text">Get connected with us on social networks:</div>
                                <div className="icon">
                                    <a href='https://www.facebook.com'><FaFacebookSquare size={25} className='mx-3' style={{color:"blue"}}/></a>
                                    <a href="https://www.instagram.com"><FaInstagramSquare size={25} style={{color:"#fa9202"}} /></a>
                                    <a href="https://www.linkedin.com" ><FaLinkedin size={25} className='mx-3' style={{color:"blue"}} /></a>
                                    <a href="https://www.guthub.com"><FaGithub size={25} style={{color:"black"}}/></a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <div className="h4 text-center ">TERABYTE</div>
                                <p style={{ fontWeight: "bold" }}>
                                    TERABYTE is an online learning platform for code-related courses, designed to help students learn from the best instructors and master the skills they need to succeed in the tech industry.</p>
                            </div>
                            <div className="col text-center">
                                <div className="h4 text-center">Use Full Links</div>
                                <Link to="/" style={{ textDecoration: "none" }}><span style={{color:"#090109"}}>Home</span></Link> <br />
                                <Link to="/html" style={{ textDecoration: "none" }}><span style={{color:"#090109"}}>Course</span></Link> <br />
                                <Link to="/blog" style={{ textDecoration: "none" }}><span style={{color:"#090109"}}>Blog</span></Link>
                            </div>
                            <div className="col text-center ">
                                <div className="h4">Contact Us</div>
                                <p><FaHome size={20} /> - Mumbai (400097)</p>
                                <p><FiMail size={20}/> - sahilgupta1107@gmail.com</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col text-center ">
                                <FaRegCopyright size={20}/> <span> Copyright: TERABYTE 2023 | Sahil Gupta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer