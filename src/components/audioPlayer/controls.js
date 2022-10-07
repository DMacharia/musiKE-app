import React from "react";
// import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";


export function WaveAnimation({ isPlaying }) {
    const waveClass = isPlaying ? "box active" : "box";
  
    return (
      <div className="box-container flex">
        <div className={`${waveClass} box1`}></div>
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
        <div className={`${waveClass} box2`}></div>
        <div className={`${waveClass} box3`}></div>
        <div className={`${waveClass} box4`}></div>
        <div className={`${waveClass} box5`}></div>
        <div className={`${waveClass} box6`}></div>
        <div className={`${waveClass} box7`}></div>
      </div>
    );
  }


export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}