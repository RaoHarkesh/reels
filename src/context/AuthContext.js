import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
export const authcontext = React.createContext();
export default  function AuthContextProvider({children}){
    const[mainloader,setMainloader]=useState(true);
    const[cuser,setCuser]=useState(null);
    useEffect(()=>{
       onAuthStateChanged(auth,(user)=>{
        if(user){
          setCuser(user);
        }else{
          setCuser(null)
        }
        setMainloader(false)
       })
    },[])
    let value =cuser
    return(
      <authcontext.Provider value={value}>
     {mainloader==false && children}

      </authcontext.Provider>
   )
}