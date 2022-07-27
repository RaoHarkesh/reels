import "./Profile.css"
import React, { useEffect, useState } from 'react'
import { useContext } from "react"
import { authcontext } from "../context/AuthContext"
import { doc , getDoc } from "firebase/firestore"
import { db } from "../Firebase"
import { async } from "@firebase/util"
export default function Profile() {
  const contextobj = useContext(authcontext);
  const cuser = contextobj;
  const[loader,setLoader]=useState("")
  // useEffect(function fn(){
  //   (async function(){
  //     const docref=doc(db , 'users' , cuser.uid);
  //     const docsnap =  await getDoc(docref);
  //     console.log("user data is = "+docsnap.data())  

  //   })()
  // },[cuser])
  return (
    <>
    {cuser==null?<h1>need to login</h1>:
        <>
        <div className="header"></div>
        <div className="main-container">
          <div className="profileimg"><img src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" /></div>
          <div className="profiledetails">
            <div className="details">User <span>Name</span></div>
            <div className="details">Posts <span>10</span></div>
            <div className="details">Email <span>Email.com</span></div>
          </div>
        </div>
        </>}
    </>

  )
}
