import { useContext, useState } from "react"
import { setDoc, doc, updateDoc  } from "firebase/firestore"
import { db } from "../Firebase"
import { authcontext } from "../context/AuthContext"
import { async } from "@firebase/util"
import { useEffect } from "react"

const Videos=(props)=>{
  let user = useContext(authcontext) 
  console.log()
    

  const [playing,setPlaying] = useState(false)
  const[currentcomment,setCurrentCommet] = useState("")
  const setComment = async (post)=>{
    setCurrentCommet("") 
    
    let arr =post.comments
     arr.push(currentcomment)
     let commentarrayreference= doc(db, "posts", post.id);
     await updateDoc(commentarrayreference,{
      comments:arr
     })
    //  await setDoc(doc(db, "posts", post.id), {
    //   comments:arr,
    //   likes:post.likes,
    //   url:post.url
      
    // });
    // console.log("comment added")
   alert("comment added")
  } 
  console.log("run")
   return(
    <>
    
    {
      props.data.map((post)=>{
        
        return(
          <div className="video-card">
          <div key={post.id} className="single-reel">
          <div className="upper-section">
          <video className="video" onClick={(e)=>{
          if(playing){
            e.currentTarget.pause();
            setPlaying(false)
          }else{
            e.currentTarget.play();
            setPlaying(true)
          }
        }} src={post.url}>
           
        </video>
          
          </div>
          
       
          <div className="bottom-section">
            <span className="reel-title">Song name</span>
          
            <input value={currentcomment} onChange={(e)=>setCurrentCommet(e.currentTarget.value)} type="text" placeholder="comments" />
            <button onClick={()=>setComment(post)} >post</button>    
          </div>
        </div>
        <div className="all-comments">
        {
          post.comments.map((comment)=>{
            return(
              
              <div key={comment.length} className="single-comment">
               {comment}
              </div>
          
              
            )
          })
        }
         </div>
      
        </div>      
        )
      })
    }
   
           
         
    
    </>
   )    
}
export default Videos 
