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
     error!=""?<div className='login-main-div'>
     <div className='login-box'>
     <span className='logo-name'>Instagram</span>
     <input type="text" placeholder='email' onChange={trackEmail}/>
      
      <input type="text" placeholder='password' onChange={trackPass} />
      
      <button onClick={printDetail}> login</button>
      <span className='show-error'>Please enter valid credentials</span>
     </div>
     </div>:
     loader==true?<div className='login-main-div'>
     <div className='login-box'>
     <span className='logo-name'>Instagram</span>
     <input type="text" placeholder='email' onChange={trackEmail}/>
      
      <input type="text" placeholder='password' onChange={trackPass} />
      
      <button onClick={printDetail}> login</button>
      <div style={{"marginTop":"40px"}} className="spinner-border text-primary" role="status"></div>
     </div>
     </div>:
     user!=null?<><h1>{user.uid}</h1><button onClick={Logout}>Signout</button></>:
     <>
     <div className='login-main-div'>
     <div className='login-box'>
     <span className='logo-name'>Instagram</span>
     <input type="text" placeholder='email' onChange={trackEmail}/>
      
      <input type="text" placeholder='password' onChange={trackPass} />
      
      <button onClick={printDetail}> login</button>
      
     </div>
     </div>
     
     
     </>
     }

     </>

  )
}

{/* <div className='login-main-div'>
<div className='login-box'>
<span className='logo-name'>Instagram</span>
<input type="text" placeholder='email' onChange={trackEmail}/>
 
 <input type="text" placeholder='password' onChange={trackPass} />
 
 <button onClick={printDetail}> login</button>
</div>
</div> */}