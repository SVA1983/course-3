import "../../../App";
import * as S from "./player-style.js";
import React from "react";
import { useEffect, useState } from "react";
export const ProgressInput = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const timeRound = setInterval(() => {
      audioRef.current.currentTime &&
        setCurrentTime(audioRef.current.currentTime);
    }, 20);
    setTimeout(() => {
        setDuration(audioRef.current.duration);
      }, 1000);

    return () => clearInterval(timeRound);
  }, [setDuration, audioRef]);
 


  return (
    <S.BarPlayerProgress>
      <S.PlayerProgress
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => {
          setCurrentTime(event.target.value);
          console.log(event.target.value);
        }}
      ></S.PlayerProgress>
    </S.BarPlayerProgress>
  );
};
