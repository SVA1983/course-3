import "../../App.js";
import "./content.css";
import { useState } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import users from "./content-item.js";


const Content = () => {
  return (
    <div className="content__playlist playlist">
        <PlaylistItems />
      </div>
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
      return (<div className="content__playlist playlist">
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={user.trackImg}></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://"
                >{visible ? user.trackName : <Skeleton  SkeletonTheme  baseColor="#202020" highlightColor="#444" width={200}/>}<span className="track__title-span">{visible ? user.description : ""}</span
              ></a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">{visible ? user.autorName : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={200}/>}</a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://"
              >{visible ? user.albumName : <Skeleton SkeletonTheme baseColor="#202020" highlightColor="#444" width={310}/>}</a
            >
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{visible ? user.trackTime : ""}</span>
          </div>
        </div>
      </div>

    
    </div>)
    })
  )
}