import React, { useRef, useState } from 'react'
import { data } from './data'
import { useDarkMode } from '../Theme/DarkModeContext';
import { useAuth } from '../Users/AuthContext';

import './Quiz.css'

const Quiz = () => {
  const { isLoggedIn } = useAuth();
  const { isDarkMode } = useDarkMode();

  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[index])
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)

  const Option1 = useRef(null)
  const Option2 = useRef(null)
  const Option3 = useRef(null)
  const Option4 = useRef(null)

  let option_array = [Option1, Option2, Option3, Option4]

  const checkAns = (e, ans) => {
    if (lock === false && isLoggedIn) {
      if (question.ans === ans) {
        e.target.classList.add("correct")
        setLock(true)
        setScore(prev => prev + 1)
      }
      else if (!isLoggedIn) {
        alert('Please login before attempting the quiz.');
      }
      else {
        e.target.classList.add("wrong")
        setLock(true)
        option_array[question.ans - 1].current.classList.add('correct')
      }
    }
  }

  const handleQuestionChange = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true)
        return 0
      }
      setIndex(++index)
      setQuestion(data[index])
      setLock(false)
      option_array.map((option) => {
        option.current.classList.remove('wrong')
        option.current.classList.remove('correct')
        return null
      })
    }
  }

  const handleReset = () => {
    setIndex(0);
    setQuestion(data[0])
    setScore(0)
    setLock(false)
    setResult(false)
  }

  const handleQuizStart = () => {
    if (isLoggedIn) {
      // Logic to start the quiz
      console.log('Quiz started!');
    } else {
      alert('Please login before taking the quiz.');
    }
  };



  return (
    <>
      <div className="quiz-body pt-5" style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
        <div className="container1 container" style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black', border: isDarkMode ? '1px solid #fbe8fc' : '1px solid black', boxShadow: isDarkMode ? "5px 10px #fbe8fc" : "none" }}>
          <h1>Take a quiz</h1>
          <hr className='m-0 border-0' style={{ height: "3px", background: "#da33e6" }} />
          {result ? <></> : <>
            <h2>{index + 1}. {question.question}</h2>
            <ul className='p-0' >
              <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} style={{ border: isDarkMode ? '1px solid #fbe8fc' : '1px solid black', color: isDarkMode ? "white" : "black" }}>{question.option1}</li>
              <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} style={{ border: isDarkMode ? '1px solid #fbe8fc' : '1px solid black' }}>{question.option2}</li>
              <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} style={{ border: isDarkMode ? '1px solid #fbe8fc' : '1px solid black' }}>{question.option3}</li>
              <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} style={{ border: isDarkMode ? '1px solid #fbe8fc' : '1px solid black' }}>{question.option4}</li>
            </ul>
            <div className="info-quiz d-flex flex-column justify-content-center align-items-center gap-3 ">
              {isLoggedIn ? (
                <button className='border-0' onClick={handleQuestionChange} style={{ background: "#da33e6", color: "#fbe8fc", padding: "8px", width: "10rem" }}>Next</button>
              ) : (
                <button className='border-0' onClick={handleQuizStart} style={{ background: "#da33e6", color: "#fbe8fc", padding: "8px", width: "10rem" }}>Start</button>
              )}
            </div>
            <div className="index" style={{ fontSize: "18px", margin: "auto" }}>{index + 1} of {data.length} Questions </div>
          </>
          }
          {result ? <>
            <h2>You scored {score} out of {data.length}</h2>
            <button className='border-0' onClick={handleReset} style={{ background: "#da33e6", color: "#fbe8fc", padding: "8px", width: "10rem" }}>Reset</button>
          </> : <></>
          }
        </div>
      </div>
    </>
  )
}

export default Quiz