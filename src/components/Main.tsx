import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"
import { useNavigate } from 'react-router-dom'
import {signInWithFacebook, signInWithGithub, signInWithGoogle} from "../Configuration/Firebase/firebase-config";

export default function Main() {

  const {toggleModals} = useContext(UserContext)





  return (
    <div className="Header">
      <div className="Container">
        <label className="main-button" htmlFor="main-btn0">Sign Up</label>
        <label className="main-button" htmlFor="main-btn1">SIgn In</label>
        <button
        id="main-btn0"
        className="main-btn"
        onClick={() => toggleModals("signUp")}
        >
        </button>
        <button
            id="main-btn1"
            className="main-btn"
            onClick={() => toggleModals("signIn")}>
          Sign In
        </button>
        <button onClick={signInWithGoogle}>Google</button>
        <button onClick={signInWithFacebook} >Facebook</button>
        <button onClick={signInWithGithub} >Github</button>
      </div>
    </div>
  )
}
