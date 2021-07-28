import React from 'react';
import ReactPlayer from "react-player";

export default function Trailer(){
    return(
        <div id='video'>
            <ReactPlayer
                playing={true}
                width={1080}
                height={500}
                url='https://www.youtube.com/watch?v=BFTSrbB2wII'
            />
        </div>
    )
}