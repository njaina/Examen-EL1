import React from 'react'
import cat from "./cat.gif"
import {signOut} from "firebase/auth";
import {auth} from "../../Configuration/Firebase/firebase-config";
import {useNavigate} from "react-router-dom";



export default function PrivateHome() {
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }
    const navigate = useNavigate()
  return (
    <div >
        <button
            onClick={logOut}>
            Log Out
        </button>
      <h1 >
        Welcome
      </h1>
      <img alt="" src={cat} />
    </div>
  )
}
