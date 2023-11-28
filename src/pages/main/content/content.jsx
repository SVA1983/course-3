import "../../../App"
import * as S from "./content-style.js"
import { useState } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'





const Content = ({tracks, setTracks,  setTrackAuthor, setNameTrack}) => {
  
  
 
  return (
    <S.ContentPlaylist>
        <PlaylistItems tracks={tracks} setTracks={setTracks} setTrackAuthor={setTrackAuthor} setNameTrack={setNameTrack}/>
      </S.ContentPlaylist>
  )       
}; 

export default Content

const PlaylistItems =  ({tracks,  setTrackAuthor, setNameTrack}) => { 
  const [visible, setVisible] = useState(false); 
  

  setTimeout(() => {
    setVisible(tracks);
  }, 3000); 
 
  return (
    tracks.map((track) => {  
      const playTracks = () => {
        setTrackAuthor(track.author);
        setNameTrack(track.name)
      };
      return (
      <S.ContentPlaylist>
      <S.PlaylistItem >
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg >
              <S.TrackTitleSvg alt="music">
                <S.TrackImg  xlinkHref={track.logo}></S.TrackImg>
              </S.TrackTitleSvg>
            </S.TrackTitleImg >
            <S.TrackTitleText>
              <S.TrackTitleLink  onClick={playTracks}
                >{visible ? track.name : <Skeleton  SkeletonTheme  baseColor="#202020" highlightColor="#444" width={200}/>}
                {/* <S.TrackDiscription>{visible ? track.name : ""}
                </S.TrackDiscription> */}
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAutor>
            <S.TrackAutorLink href="http://" >
              {visible ? track.author : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={200}/>}
              </S.TrackAutorLink>
          </S.TrackAutor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://" 
              >{visible ? track.album : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={310}/>}
              </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <S.TrackLikeImg  xlinkHref="img/icon/sprite.svg#icon-like"></S.TrackLikeImg >
            </S.TrackTimeSvg>
            <S.TimeText key={track.id}>{visible ? track.duration_in_seconds : ""}</S.TimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>

    
    </S.ContentPlaylist>)
    })
  )
}