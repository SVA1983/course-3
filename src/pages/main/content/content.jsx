import "../../../App"
import * as S from "./content-style.js"
import { useState } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import users from "./content-item.js";




const Content = () => {
  return (
    <S.ContentPlaylist>
        <PlaylistItems />
      </S.ContentPlaylist>
  )       
}; 

export default Content

const PlaylistItems = () => { 
  const [visible, setVisible] = useState(false); 
  setTimeout(() => {
    setVisible(true);
  }, 3000);
  return (
    users.map((user) => {
      return (
      <S.ContentPlaylist>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg >
              <S.TrackTitleSvg alt="music">
                <S.TrackImg key={user.id} xlinkHref={user.trackImg}></S.TrackImg>
              </S.TrackTitleSvg>
            </S.TrackTitleImg >
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://" key={user.id}
                >{visible ? user.trackName : <Skeleton  SkeletonTheme  baseColor="#202020" highlightColor="#444" width={200}/>}
                <S.TrackDiscription>{visible ? user.description : ""}
                </S.TrackDiscription>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAutor>
            <S.TrackAutorLink href="http://" key={user.id}>
              {visible ? user.autorName : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={200}/>}
              </S.TrackAutorLink>
          </S.TrackAutor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://" key={user.id}
              >{visible ? user.albumName : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={310}/>}
              </S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <S.TrackLikeImg  xlinkHref="img/icon/sprite.svg#icon-like"></S.TrackLikeImg >
            </S.TrackTimeSvg>
            <S.TimeText key={user.id}>{visible ? user.trackTime : ""}</S.TimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>

    
    </S.ContentPlaylist>)
    })
  )
}