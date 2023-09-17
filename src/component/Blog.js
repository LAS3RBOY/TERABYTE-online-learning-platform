import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <>
    <div className="blog">

      <div className="container">
        <h2 className='text-center'>TERA | BYTE Blogs</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-bolder ">What is FrontEnd Development?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <br/>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-bolder ">What is Backend Development?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <br/>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-bolder">What is Cloud Engineering?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <br/>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-bolder">What is Server Side Rendering?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <br/>
      </div>
    </div>
    </>
  )
}

export default Blog 