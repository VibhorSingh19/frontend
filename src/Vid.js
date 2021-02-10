
import React from 'react';
import ReactPlayer from 'react-player';
function Vid({id}) {
    
    return (
        <>
        <h1>Hello: {id}</h1>
        <ReactPlayer url="http://www.w3schools.com/html/mov_bbb.mp4" controls />
        </>
    )
} 
  


export default Vid;