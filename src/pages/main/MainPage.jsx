import "../../App";
import BarAudioPlayer from "./player/ player";
import Burger from "./nav-burger/nav-burger";
import SideBar from "./sidebar/sidebar";
import Search from "./search/search";
import Content from "./content/content";
import Filter from "./filter/filter";
import TitleName from "./title-name/title-name";
import TitlePlaylist from "./content-title/content-title";
import { useState, useRef, useEffect } from "react";

function Main({ outLogin, user, tracks, setTracks, addError }) {
  const [nameTrack, setNameTrack] = useState(null);
  const [trackAuthor, setTrackAuthor] = useState(null);
  const [clickPlayer, setClickPlayer] = useState(null);
  const [audioPlay, setAudioPlay] = useState(null);
  const audioRef = useRef(null);
  const ref = audioRef;
  console.log(ref);

  useEffect(() => {
    if (audioPlay) {
      setClickPlayer(true);
      audioRef.current.play();
    }
    return;
  }, [audioPlay]);

  const handleClick = () => {
    if (!clickPlayer) {
      setClickPlayer(true);
      audioRef.current.play();
    }
    if (clickPlayer) {
      setClickPlayer(false);
      audioRef.current.pause();
      setAudioPlay(null);
    }
  };
  // useEffect(handleClick, [setAudioPlay])

  return (
    <div className="container">
      <main className="main">
        <Burger outLogin={outLogin} user={user} />
        <div className="main__centerblock centerblock">
          <Search />
          <TitleName />
          <Filter tracks={tracks} />
          <div className="centerblock__content">
            <TitlePlaylist />
            <Content
              tracks={tracks}
              setTracks={setTracks}
              setTrackAuthor={setTrackAuthor}
              setNameTrack={setNameTrack}
              addError={addError}
              audioRef={audioRef}
              setAudioPlay={setAudioPlay}
              setClickPlayer={setClickPlayer}
              audioPlay={audioPlay}
            />
          </div>
        </div>
        <SideBar />
      </main>
      {nameTrack ? (
        <BarAudioPlayer
          nameTrack={nameTrack}
          trackAuthor={trackAuthor}
          clickPlayer={clickPlayer}
          handleClick={handleClick}
          audioPlay={audioPlay}
          audioRef={audioRef}
        />
      ) : (
        ""
      )}
      <footer className="footer"></footer>
    </div>
  );
}

export default Main;
