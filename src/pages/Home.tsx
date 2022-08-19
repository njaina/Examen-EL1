import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"

export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className="Home">
      <h1 className="text">
        {currentUser ? "Welcome buddy" : "Hi, Sign Up or Sign In"}
      </h1>
    </div>
  )
}
