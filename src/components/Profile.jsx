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
  const[loader,setLoader]=useState(true)
  const[user,setUser] = useState(null);
  useEffect(function fn(){
    if(cuser){
      (async function(){
        const docref=doc(db , 'user' , cuser.uid);
        const userobj =  await getDoc(docref);
        console.log(userobj.data())  
        setLoader(false)
        setUser(userobj.data())
      })()
    }
  },[])
  return (
    <>
    {loader==true?<h1>Loading.....</h1>:
        <>
        <div className="header"></div>
        <div className="main-container">
          <div className="profileimg"><img src="https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg" alt="" /></div>
          <div className="profiledetails">
            <div className="details">User <span>{user.name}</span></div>
            <div className="details">Posts <span>{user.reelsId.length}</span></div>
            <div className="details">Email <span>{user.email}</span></div>
          </div>
        </div>
        </>}
    </>

  )
}
