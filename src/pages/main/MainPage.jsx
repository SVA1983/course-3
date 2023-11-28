
import '../../App';
import BarAudioPlayer from './player/ player';
import Burger from './nav-burger/nav-burger';
import SideBar from './sidebar/sidebar';
import Search from './search/search';
import Content from './content/content';
import Filter from './filter/filter';
import TitleName from './title-name/title-name'
import TitlePlaylist from './content-title/content-title';
import { useState } from 'react';



function Main({outLogin, user, tracks, setTracks,}) {
  const [nameTrack, setNameTrack] = useState(null);
  const [trackAuthor, setTrackAuthor] = useState(null);


  


 
  return (
   
     
    
     <div className="container">
        <main className="main">
        <Burger outLogin={outLogin} user={user}/>
        <div className="main__centerblock centerblock">
         < Search />
         < TitleName />
    < Filter />
    <div className="centerblock__content">
      < TitlePlaylist />
      < Content  tracks={tracks} setTracks={setTracks}  setTrackAuthor={setTrackAuthor} setNameTrack={setNameTrack}/>
    </div>
      </div>
        <SideBar />
        </main>
         {nameTrack ? <BarAudioPlayer  nameTrack={nameTrack} trackAuthor={trackAuthor}/> : ""}
        <footer className="footer"></footer>
      </div>
      
      )
  
}

export default Main;
