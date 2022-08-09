import { useState } from "react"
const Videos=()=>{
   const [playing,setPlaying] = useState(false)
   return(
    <>
    <div className="single-reel">
      <div className="upper-section">
      <video className="video" onClick={(e)=>{
      if(playing){
        e.currentTarget.pause();
        setPlaying(false)
      }else{
        e.currentTarget.play();
        setPlaying(true)
      }
    }} src="https://firebasestorage.googleapis.com/v0/b/class-demo-94ab5.appspot.com/o/I%20am%20a%20rider%20%23fitmanjeet%20%23shorts%20%23fitmanjeetshorts%20%23bodybuilder%20%23trendring.mp4?alt=media&token=7324c572-22f5-4ffa-812b-7db2641b995e">
     
    </video>
      </div>
      <div className="bottom-section">
        <span className="reel-title">Song name</span>
        <input type="text" placeholder="comments" />    
      </div>
    </div>
    <div className="single-reel">
      <div className="upper-section">
      <video className="video" onClick={(e)=>{
      if(playing){
        e.currentTarget.pause();
        setPlaying(false)
      }else{
        e.currentTarget.play();
        setPlaying(true)
      }
    }} src="https://firebasestorage.googleapis.com/v0/b/class-demo-94ab5.appspot.com/o/I%20am%20a%20rider%20%23fitmanjeet%20%23shorts%20%23fitmanjeetshorts%20%23bodybuilder%20%23trendring.mp4?alt=media&token=7324c572-22f5-4ffa-812b-7db2641b995e">
     
    </video>
      </div>
      <div className="bottom-section">
        <span className="reel-title">Song name</span>
        <input type="text" placeholder="comments" />    
      </div>
    </div>
    <div className="single-reel">
      <div className="upper-section">
      <video className="video" onClick={(e)=>{
      if(playing){
        e.currentTarget.pause();
        setPlaying(false)
      }else{
        e.currentTarget.play();
        setPlaying(true)
      }
    }} src="https://firebasestorage.googleapis.com/v0/b/class-demo-94ab5.appspot.com/o/I%20am%20a%20rider%20%23fitmanjeet%20%23shorts%20%23fitmanjeetshorts%20%23bodybuilder%20%23trendring.mp4?alt=media&token=7324c572-22f5-4ffa-812b-7db2641b995e">
     
    </video>
      </div>
      <div className="bottom-section">
        <span className="reel-title">Song name</span>
        <input type="text" placeholder="comments" />    
      </div>
    </div>
    </>
   )    
}
export default Videos 