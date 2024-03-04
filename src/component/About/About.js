import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import image from '../Images/part-two-img7.png'
import image1 from '../Images/course-img1.png'
import image2 from '../Images/css-icon.png'
import image3 from '../Images/js-icon.png'
import image4 from '../Images/php-icon.png'
import image5 from '../Images/mongoDB-icon.png'
import image6 from '../Images/node-icon.png'
import image7 from '../Images/reactJS-icon.png'
import image8 from '../Images/python-icon.png'
import image9 from '../Images/java-icon.png'
import image10 from '../Images/csharp-icon.png'
import image11 from '../Images/angular-icon.png'
import TypingAnimation from './TypingAnimation'
import { useDarkMode } from '../Theme/DarkModeContext';


export default function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
        <div className="container about">
          <div className="row">
            <div class="col-md-6 part-one">
              <p className='text1'>Learn to <span>Code</span></p>
              <p className="intro my-3">Learn everything related to <span>Coding</span> at one place</p>
              <TypingAnimation />
              <div className="buttons mt-4 ">
                <button className='button-custom-about my-2'> <Link to='/html' className=' text-decoration-none ' style={{ background: "#de33b6", color: "#fbe8fc" }}>Get Started</Link> </button>
                <button disabled className='button-custom-about mx-2'><Link to='/compiler' className=' text-decoration-none ' style={{ background: "#de33b6", color: "#fbe8fc" }}>Practice</Link></button>
              </div>
            </div>
            <div class="col-md-6 part-two my-3">
              <img src={image} alt="image1" />
            </div>
          </div>
          <br />
          <div className="course" style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
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
