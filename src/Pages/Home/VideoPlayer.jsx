import React, { useState } from "react";

import video1 from "./../../assets/Videos/Video1.mp4"
import video2 from "./../../assets/Videos/Video2.mp4";

const VideoPlayer = () => {
  const videos = [video1, video2 ]; // List of videos
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  return (
    <div className="overflow-x-auto darktheme1 w-[92%] h-96 my-10 rounded-md " 
    // className="relative w-[400px] h-[250px] rounded-lg overflow-hidden shadow-lg  "
    >

      {/* RGB Overlay start*/}
      <div className="absolute -inset-3 bg-gradient-to-tr from-red-800 via-green-400 to-blue-100 opacity-90 mix-blend-overlay z-10 pointer-events-none"></div>
      {/* RGB Overlay end*/}

      {/* Video */}
      <video
        className="w-full h-full object-cover pointer-events-none"
        src={videos[currentVideoIndex]} // Replace with a valid .mp4 file URL
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
      
    </div>
  );
};

export default VideoPlayer;
