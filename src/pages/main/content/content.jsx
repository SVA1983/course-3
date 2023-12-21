import "../../../App";
import * as S from "./content-style.js";
import { useState } from "react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Content = ({
  tracks,
  setTracks,
  setTrackAuthor,
  setNameTrack,
  addError,
  setAudioPlay,
  setClickPlayer,
  audioRef,
  audioPlay,
  setDuration

}) => {
  return (
    <S.ContentPlaylist>
      {addError ? (
        <ErrorMessage addError={addError} />
      ) : (
        <PlaylistItems
          tracks={tracks}
          setTracks={setTracks}
          setTrackAuthor={setTrackAuthor}
          setNameTrack={setNameTrack}
          addError={addError}
          setAudioPlay={setAudioPlay}
          setClickPlayer={setClickPlayer}
          audioRef={audioRef}
          audioPlay={audioPlay}
          setDuration={setDuration}
          
        />
      )}
    </S.ContentPlaylist>
  );
};

export default Content;

const PlaylistItems = ({
  tracks,
  setTrackAuthor,
  setNameTrack,
  setAudioPlay,
  setClickPlayer,
  setDuration,
  audioRef,
  audioPlay
  
 
}) => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(tracks);
  }, 3000);

  return tracks.map((track) => {
    const PlayTracks = () => {
      setAudioPlay(track.track_file);
      setTrackAuthor(track.author);
      setNameTrack(track.name);
      setClickPlayer(true);
      
      // setDuration(track.duration_in_seconds)
    };

    return (
      <S.ContentPlaylist key={track.id}>
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <S.TrackImg xlinkHref={track.logo}></S.TrackImg>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink onClick={PlayTracks}>
                  {visible ? (
                    track.name
                  ) : (
                    <Skeleton
                      SkeletonTheme
                      baseColor="#202020"
                      highlightColor="#444"
                      width={200}
                    />
                  )}
                  {/* <S.TrackDiscription>{visible ? track.name : ""}
                </S.TrackDiscription> */}
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAutor>
              <S.TrackAutorLink href="http://">
                {visible ? (
                  track.author
                ) : (
                  <Skeleton
                    SkeletonTheme
                    baseColor="#202020"
                    highlightColor="#444"
                    width={200}
                  />
                )}
              </S.TrackAutorLink>
            </S.TrackAutor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                {visible ? (
                  track.album
                ) : (
                  <Skeleton
                    SkeletonTheme
                    baseColor="#202020"
                    highlightColor="#444"
                    width={310}
                  />
                )}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <S.TrackLikeImg xlinkHref="img/icon/sprite.svg#icon-like"></S.TrackLikeImg>
              </S.TrackTimeSvg>
              <S.TimeText key={track.id}>
                {visible
                  ? ((track.duration_in_seconds / 60) | 0) +
                    ":" +
                    (track.duration_in_seconds % 60 | 0)
                  : ""}
              </S.TimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      </S.ContentPlaylist>
    );
  });
};

const ErrorMessage = ({ addError }) => {
  return (
    <S.ErrorText>
      Не удалось загрузить плейлист, попробуйте позже: {addError.message}
    </S.ErrorText>
  );
};
