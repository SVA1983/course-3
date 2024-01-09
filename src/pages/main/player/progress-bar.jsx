import "../../../App";
import * as S from "./player-style.js";
import React from "react";
import { useEffect, useState, useRef } from "react";

export const ProgressInput = ({ audioRef, timeProgress, setClickPlayer }) => {
  const [duration, setDuration] = useState(0);
  const refProgress = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      setDuration(audioRef.current.duration);
    }, 1000);
  }, [setClickPlayer, audioRef]);
  const onChangeProgress = () => {
    audioRef.current.currentTime = refProgress.current.value;
  };
  setTimeout(() => {
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setClickPlayer(false);
    }
  }, 1000);

  return (
    <S.BarPlayerProgress>
      <S.PlayerProgress
        ref={refProgress}
        type="range"
        min={0}
        max={duration}
        value={timeProgress}
        step={0.01}
        onChange={onChangeProgress}
      ></S.PlayerProgress>
    </S.BarPlayerProgress>
  );
};
