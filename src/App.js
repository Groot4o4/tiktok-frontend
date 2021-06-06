import React, { useEffect, useState  } from 'react';
import './App.css';
import axios from './axios';
import Video from './Video';


function App() {

  const [videos ,setVideos] = useState([]);

useEffect(() => {
  async function fetchPosts(){
    const response = await axios.get('/v2/posts');
    setVideos(response.data);

    return response;
  }

  fetchPosts();
}, []);

console.log(videos)


  return (
    <div className="App">
    
    <div className="app_video"> 

      {videos.map(({ url,
     channel, discription, song,
     likes,   shares, messages}) =>(
        <Video

        url ={url}
        channel  ={channel} discription ={discription} song ={song}
        likes ={likes}   shares ={shares} messages ={messages}
         />
      ))}

   

    

    </div>
      
      

    </div>
  );
}

export default App;
