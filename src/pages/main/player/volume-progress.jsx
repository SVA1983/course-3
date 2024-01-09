import "../../../App";
import * as S from "./player-style.js";
import React from "react";
import { useRef } from "react";

export const VolumeControl = ({ audioRef }) => {
  const refVolume = useRef(0);
  const onChangeProgress = () => {
    audioRef.current.volume = refVolume.current.value;
  };

  return (
    <S.VolumeProgress>
      <S.VolumeProgressLine
        type="range"
        name="range"
        ref={refVolume}
        min={0}
        max={1}
        value={refVolume.current.volume}
        step={0.01}
        onChange={onChangeProgress}
      />
    </S.VolumeProgress>
  );
};
