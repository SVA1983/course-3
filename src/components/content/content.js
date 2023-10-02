import "../../App.js"
import "./content.css"
import React from 'react';
// import React, { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Content = () => {
  const [visible, setVisible] = useState(false); 
  return (
    <div className="content__playlist playlist">     
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name=" Gulit" />} 
            autorName={< AutorName name="Nerzo" />}
            albumName={< AlbumName name="Welcome Reality" />} 
            trackTime={<TrackTime time="4:44" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Elektro" />} 
            autorName={< AutorName name="Dynoro, Outwork, Mr. Gee" />}
            albumName={< AlbumName name="Elektro" />} 
            trackTime={<TrackTime time="2:22" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="I’m Fire" />} 
            autorName={< AutorName name="Ali Bakgor" />}
            albumName={< AlbumName name="I’m Fire" />} 
            trackTime={<TrackTime time="2:22" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Non Stop" description="(Remix)" />} 
            autorName={< AutorName name="Стоункат, Psychopath" />}
            albumName={< AlbumName name="Non Stop" />} 
            trackTime={<TrackTime time="4:12" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Run Run" description="(feat. AR/CO)" />} 
            autorName={< AutorName name="Jaded, Will Clarke, AR/CO" />}
            albumName={< AlbumName name="Run Run" />} 
            trackTime={<TrackTime time="2:54" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Eyes on Fire" description="(Zeds Dead Remix)" />} 
            autorName={< AutorName name="Blue Foundation, Zeds Dead" />}
            albumName={< AlbumName name="Eyes on Fire" />} 
            trackTime={<TrackTime time="5:20" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Mucho Bien" description="(Hi Profile Remix)" />} 
            autorName={< AutorName name="HYBIT, Mr. Black, Offer Nissim, Hi Profile" />}
            albumName={< AlbumName name="Mucho Bien" />} 
            trackTime={<TrackTime time="3:41" />}
        />
         < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
        < PlaylistItem img={<TrackImg img="img/icon/sprite.svg#icon-note"/>} 
            trackName={<TrackName name="Knives n Cherries" description="" />} 
            autorName={< AutorName name="minthaze" />}
            albumName={< AlbumName name="Captivating" />} 
            trackTime={<TrackTime time="1:48" />}
        />
      </div>
 
    );
}; 

export default Content;

const TrackName = (props) => { 
  const [visible, setVisible] = useState(false); 
  return (
    <div className="track__title-text">
      <a className="track__title-link" href="http://"
        >{props.name} <span className="track__title-span">{props.description}</span></a>
    </div>
    

  )

}

const AutorName = (props) => { 
const [visible, setVisible] = useState(false); 
  return (
    <div className="track__author">
              <a className="track__author-link" href="http://">{props.name}</a>
            </div>

  )

}

const AlbumName = (props) => { 
const [visible, setVisible] = useState(false); 
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">{props.name}</a >
    </div>

  )

}
const TrackTime = (props) => { 

  return (
    <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">{props.time}</span>
            </div>

  )

}
const TrackImg = (props) => { 
  return (
    <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref={props.img}></use>
                </svg>
              </div>

  )

}


const PlaylistItem = (props) => { 
  return (
    <div className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              {props.img}
              {props.trackName}
            </div>
            {props.autorName}
            {props.albumName}
            {props.trackTime}
          </div>
        </div>
             

  )

}
