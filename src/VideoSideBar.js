import React , {useState} from 'react'
import './VideoSideBar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';



function VideoSideBar({likes ,shares, messages} ) {
  
    const [liked,setliked] = useState(false);
  
  
    return (

       

        <div className='videoSideBar'>
            <div className="VideoSidebar_button"> 
            {liked ? (
                <FavoriteIcon  fontSize = "large"    onClick={(e) => setliked(false)}/> )
                : (<FavoriteBorderIcon fontSize = "large" onClick={(e) => setliked(true)}  />)

            }
            
            <p>{liked ? likes +1  : likes}</p> 
                 </div>

            <div className="VideoSidebar_button">
                <MessageIcon fontSize = "large" /> 
                <p>{shares}</p> </div>

            <div className="VideoSidebar_button">
                <ShareIcon  fontSize = "large"/>
                <p>{messages}</p>
                </div>
            




        </div>
  
    )
}

export default VideoSideBar
