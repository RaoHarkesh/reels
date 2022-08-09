import { useState } from "react"
const Videos=()=>{
   const [playing,setPlaying] = useState(false)
   return(
    <>
    <video onClick={(e)=>{
      if(playing){
        e.currentTarget.pause();
        setPlaying(false)
      }else{
        e.currentTarget.play();
        setPlaying(true)
      }
    }} src="">

    </video>
    </>
   )    
}
export default Videos 