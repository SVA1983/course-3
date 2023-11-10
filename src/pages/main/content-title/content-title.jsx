import "../../../App";
import * as S from "./content-title-style.js";
import React from "react";

const TitlePlaylist = () => {
  return (
    <S.ContentTitle>
      <S.PlaylistTitle width="447px">Трек</S.PlaylistTitle>
      <S.PlaylistTitle width="321px">ИСПОЛНИТЕЛЬ</S.PlaylistTitle>
      <S.PlaylistTitle width="245px">АЛЬБОМ</S.PlaylistTitle>
      <S.PlaylistTitle width="60px" textaign="end">
        <S.PlaylistSvg alt="time">
          <S.PlaylistWatch xlinkHref="img/icon/sprite.svg#icon-watch"></S.PlaylistWatch>
        </S.PlaylistSvg>
      </S.PlaylistTitle>
    </S.ContentTitle>
  );
};
export default TitlePlaylist;
