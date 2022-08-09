import React, { useState } from "react"
import Videos from "./videos"
import { signOut } from "firebase/auth"
import { auth } from "../Firebase"
export default function Feed() {
  
  return (
    <>
       <div className="feed-header">
          <span className="feed-logo">Instagram</span>
          <img src="https://c8.alamy.com/comp/2HYEGN1/zayn-malik-at-the-2018-pre-grammy-gala-and-salute-to-industry-icons-held-at-the-sheraton-new-york-times-square-hotel-on-january-27-2018-2HYEGN1.jpg" alt="" />
           <button onClick={()=>{signOut(auth)}}>signout</button>
       </div>
       <div className="video-card">
        <Videos/>
       </div>
    </>
  )
}
