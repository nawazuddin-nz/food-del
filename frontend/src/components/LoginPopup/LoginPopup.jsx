import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='loginpopup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                 <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>

            <div className="login-popup-input">
                {currState==="Sign up"? <input type="text" placeholder='Your Name' required />:<></>}
               
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='password' required /> <br />
                
            </div>
            <button>{currState==="Sign up"?"Create Account":"Login"}</button>
            
            <div className="pageshift">          
 {currState==="Sign up"? <p>Go to Login page? <span onClick={()=>setCurrState("Login")}>Click here</span></p>: 
    <p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>}
           </div>
             
        </form>


   
    
    </div>
  )
}

export default LoginPopup