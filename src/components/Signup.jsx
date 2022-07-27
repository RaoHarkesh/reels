import {auth, db} from '../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState,React}  from 'react'
import { addDoc , collection} from 'firebase/firestore';
export default function Signup() {
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  const[name,setName]=useState("");
  const[loader,setLoader]=useState(false);
  const[user,setUser]=useState("");
  const[error,setError]=useState("");
  const newUser=async function(){
    try{
      setLoader(true);
      let usercred = await createUserWithEmailAndPassword(auth , email , password);
      const dbref = await addDoc(collection(db,'user'),{
        email,
        name,
        userid : usercred.user.uid
      })
      setUser(usercred.user);
    }catch(error){
        setError(error.message)
        setTimeout(()=>{
          setError("");
        },2000)
    }
    setLoader(false);
     
  }
  return (
    <>
    { error!=""?<h1>{error}</h1>:
      loader==true?<h1>...Loading</h1>:
      user!=""?<h1>Welcome {user.uid}</h1>:
    <>
    <input type='Email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}></input><br />
    <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}></input><br />
    <input type='name' placeholder='name' onChange={(e)=>setName(e.target.value)}></input><br />
    <button onClick={newUser}>Signup</button>
    </>
  }
    </>
  )
}
