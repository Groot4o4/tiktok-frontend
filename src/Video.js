import React,{useRef,useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';


function Video({url ,likes , shares, messages,channel, discription, song,}) {
const videoRef =useRef(null)
const[playing, setPlaying]= useState(false)



const handleVideoPress= ()=>{
    if(playing){
        videoRef.current.pause();
        setPlaying(false);
    }
    else{
        videoRef.current.play();
        setPlaying(true);
    }

}

    return (
        <div className="video">
            <video className="video_player"  onClick={handleVideoPress} ref={videoRef} loop src={url}></video>
            <VideoFooter  channel={channel} discription={discription} song={song} />
            <VideoSideBar likes = {likes}  shares={shares} messages={messages} />


        </div>
        
    )
}

export default Video
