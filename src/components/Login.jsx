import React, { useEffect, useState } from 'react'
import {auth} from '../Firebase'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';
export default function Login() {
  const[email,setEmail] = useState("");
  const[pass,setPass] = useState("");
  const[user,setUser] = useState(null);
  const[loader,setLoader] = useState(false);
  const[error,setError] = useState("");
  // const[mainloader, setMainloader]=useState(true);
  const trackEmail= function(e){
     setEmail(e.target.value); 
  }
  const trackPass= function(e){
     setPass(e.target.value);
  }
  const printDetail=async function(){
    try{  
      setLoader(true);
      let usercred  =await  signInWithEmailAndPassword(auth , email , pass) 
       setUser(usercred.user);
    }catch(err){
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
     
    }
    setLoader(false);
  }
  const Logout=async function(){
        await signOut(auth);
        setUser(null);
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null)
      }
      // setMainloader(false);
    });
  },[])
  return (
     <>
     { 
    //  mainloader==true?<h1>...please wait</h1>:
     error!=""?<h1>error is {error}</h1>:
     loader==true?<h1>Loading....</h1>:
     user!=null?<><h1>{user.uid}</h1><button onClick={Logout}>Signout</button></>:
     <>
     
     <input type="text" placeholder='email' onChange={trackEmail}/>
      <br></br>
      <input type="text" placeholder='password' onChange={trackPass} />
      <br></br>
      <button onClick={printDetail}> login</button>
     </>
     }

     </>

  )
}
