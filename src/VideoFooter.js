import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'


function VideoFooter({channel, discription,song}) {
    return (
        <div className="videoFooter">

            <div className="videoFooter_text">

                <h3>{channel}</h3>
                <p>{discription}</p>
                <div className="videoFooter_Ticker">

                    <MusicNoteIcon className="videoFooter_Icon" />

                    <Ticker mode="smooth">
        {({ index }) => (
            <>
                
                <p>{song}</p>
               
            </>
        )}
    </Ticker>
                </div>





            </div>

         <img src="https://pngimg.com/uploads/vinyl/vinyl_PNG102.png" className='videoRecord' alt="" />





        </div>
  
    )
}

export default VideoFooter
