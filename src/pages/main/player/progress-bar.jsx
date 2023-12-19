import "../../../App";
import * as S from "./player-style.js";
import React from "react";


export const ProgressInput = ({currentTime, setCurrentTime, duration}) => {
    
    return (
      <S.BarPlayerProgress>
            <S.PlayerProgress  
                type="range"
                // min={0}
                // max={duration}
                // value={currentTime}
                // step={0.01}
                // onChange={(event) => setCurrentTime(event.target.value)}
                >
            </S.PlayerProgress>
        </S.BarPlayerProgress>
      
    )
  }