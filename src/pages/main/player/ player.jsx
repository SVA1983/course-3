import "../../../App"
import * as S from "./player-style.js";
import React from 'react';






const BarAudioPlayer = () => {
  return (
  <S.Bar >
    <S.BarContent>
              <S.BarPlayerProgress></S.BarPlayerProgress>
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.PlayerControlsBtnPrev>
                      <S.PlayerPrevSvg  alt="prev">
                        <S.SvgImg xlinkHref="img/icon/sprite.svg#icon-prev"></S.SvgImg>
                      </S.PlayerPrevSvg >
                    </S.PlayerControlsBtnPrev>
                    <S.PlayerControlsBtnPlay>
                      <S.PlaySvg alt="play">
                        <S.StyledPlaySvgIcon xlinkHref="img/icon/sprite.svg#icon-play">
                        </S.StyledPlaySvgIcon>
                      </S.PlaySvg>
                    </S.PlayerControlsBtnPlay>
                    <S.PlayerControlsBtnNext>
                      <S.PlayerNextSvg alt="next">
                        <S.PlayerNextIcon xlinkHref="img/icon/sprite.svg#icon-next"></S.PlayerNextIcon>
                      </S.PlayerNextSvg>
                    </S.PlayerControlsBtnNext>
                    <S.PlayerControlsBtnRepeat>
                      <S.PlayerRepeattSvg alt="repeat">
                        <S.PlayerRepeatIcon xlinkHref="img/icon/sprite.svg#icon-repeat"></S.PlayerRepeatIcon>
                      </S.PlayerRepeattSvg>
                    </S.PlayerControlsBtnRepeat>
                    <S.PlayerControlsBtnShuffle>
                      <S.PlayerShuffleSvg alt="shuffle">
                        <S.PlayerShuffleIcon xlinkHref="img/icon/sprite.svg#icon-shuffle">
                        </S.PlayerShuffleIcon>
                      </S.PlayerShuffleSvg>
                    </S.PlayerControlsBtnShuffle>
                  </S.PlayerControls>

                  <S.PlayerTrackPlay>
                    <S.TrackPlayContain>
                      <S.TrackPlayImage>
                        <S.TrackPlaySvg alt="music">
                          <S.TrackPlaySvgIcon xlinkHref="img/icon/sprite.svg#icon-note"></S.TrackPlaySvgIcon>
                        </S.TrackPlaySvg>
                      </S.TrackPlayImage>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://"
                          >Ты та...</S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </S.TrackPlayContain>

                    <S.TrackPlayLikeDis>
                      <S.TrackPlayLike>
                        <S.TrackPlayLikeSvg  alt="like">
                          <S.TrackPlayLikeIcon xlinkHref="img/icon/sprite.svg#icon-like"></S.TrackPlayLikeIcon>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDis>
                        <S.TrackPlayDisSvg alt="dislike">
                          <S.TrackPlayDisIcon
                            xlinkHref="img/icon/sprite.svg#icon-dislike"
                          ></S.TrackPlayDisIcon>
                        </S.TrackPlayDisSvg>
                      </S.TrackPlayDis>
                    </S.TrackPlayLikeDis>
                  </S.PlayerTrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>
                  <S.VolumeContent>
                    <S.VolumeImg>
                      <S.VolumeSvg alt="volume">
                        <S.VolumeIcon xlinkHref="img/icon/sprite.svg#icon-volume"></S.VolumeIcon>
                      </S.VolumeSvg>
                    </S.VolumeImg>
                    <S.VolumeProgress>
                      <S.VolumeProgressLine
                        type="range"
                        name="range"
                      />
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
      </S.BarContent>  
    </S.Bar >   
    );

}; 

export default BarAudioPlayer