import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Ai from '../../assets/ai.jpg'

const LandingPage = () => {

  return (
    <div className="mainSection">
      <div className="leftSection">
        <p className='section-firstPara'>GET YOUR QUESTIONS ANSWERED.</p>
        <h1 className="section-heading-2">Parse any</h1>
        <h1 className="section-heading-2"> <span>PDF</span> to <span>ask</span> </h1>
        <h2 className="section-heading-3"> Questions</h2>
        <p className='section-secondPara'>
          Uses AI to parse PDF and give answers of question asked from pdf.
        </p >
        <div className="button">
          <NavLink to="/signUp">
           <Button text={"SignUp"}/>
          </NavLink>
        </div>
      </div>
      <div className='landing-image' >
        <img src={Ai} alt="ai"/>
      </div>
    </div>
  )
}

export default LandingPage