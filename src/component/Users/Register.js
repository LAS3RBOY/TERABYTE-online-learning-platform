import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login-Register.css'


const Register = () => {

    const [name, setName] = useState();
    const [instituteName, setInstituteName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/register', { name, instituteName, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                }
                else {
                    alert("Registered successfully! Please Login to proceed.")
                    navigate('/login');
                }

            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="register-body d-flex justify-content-center align-items-center vh-100">
                <div className="bg-transparent p-3" style={{ width: '90%', maxWidth:"30rem", border: "3px solid #da33e6", borderRadius: "25px" }}>
                    <h2 className='mb-3 fw-bolder ' style={{ color: "#da33e6" }}>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong style={{ color: "#da33e6" }}>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputname"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong style={{ color: "#da33e6" }}>Institute Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Institute Name"
                                className="form-control"
                                id="exampleInputname"
                                onChange={(event) => setInstituteName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong style={{ color: "#da33e6" }}>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong style={{ color: "#da33e6" }}>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn m-auto" style={{ background: "#da33e6", color: "#fbe8fc" }}>Register</button>
                    </form>

                    <p className='container my-2' style={{ color: "#da33e6" }}>Already have an account ?</p>
                    <Link to='/login' className="btn m-auto" style={{ background: "#da33e6", color: "#fbe8fc" }}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register