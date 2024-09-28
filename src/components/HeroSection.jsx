import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { BackgroundLines } from "./background-lines";
import { Link } from "react-router-dom";

const HeroSection = () => {

  const handleStartBrainstorming = () => {
    window.location.href = '/whiteboard';
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Whiteboard that never
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          <br/>
          Limits You
        </span>
      </div>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Your Ideas Deserve more than just scribbles! doodle, brainstorm and collaborate on an endless canvas thats always raady for action 
      </p>
      <Link to="/whiteboard">
      <button 
     style={{zIndex:'1000'}}
  className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
  Start brainstorming
</button>
      </Link>
      <div className="flex justify-center my-10">
      
        
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
