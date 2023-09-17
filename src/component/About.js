import React from 'react'
import './About.css'
import image from './part-two-img7.png'
import image1 from './course-img1.png'
import image2 from './css-icon.png'
import image3 from './js-icon.png'
import image4 from './php-icon.png'
import image5 from './mongoDB-icon.png'
import image6 from './node-icon.png'
import image7 from './reactJS-icon.png'
import image8 from './python-icon.png'
import image9 from './java-icon.png'
import image10 from './csharp-icon.png'
import image11 from './angular-icon.png'

export default function About() {
  return (
    <>
    <div className="about-bg">
        <div className="container about">
          <div className="row">
            <div class="col-md-6 part-one">
              <p className='text1'>Learn to <span>Code</span></p>
              <p className="intro my-3">Learn everything related to <span>Coding</span> at one place</p>
              <button className='button-custom-about my-2'>Get Started</button>
              <button disabled className='button-custom-about-disabled mx-2'>New to Coding</button>
            </div>
            <div class="col-md-6 part-two my-3">
              <img src={image} alt="image1" />
            </div>
          </div>
          <br />
          <div className="course">
            <div className="container">
              <h2 className='text-center'>Courses we offer</h2>
              <div className="wrapper h-50 ">
                <div className="slider mt-0 ">
                  <div className="slide-track">
                    <div className="slide">
                      <img src={image1} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image2} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image3} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image4} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image5} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image6} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image7} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image8} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image9} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image10} alt='logo' />
                    </div>
                    <div className="slide">
                      <img src={image11} alt='logo' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}
