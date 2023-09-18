
import './App.css';
import BarAudioPlayer from './components/ player';
import Navigation from './components/nav';
import Recom from './components/recom';
import Search from './components/search';
import Content from './components/content';
import Filter from './components/filter';
import TitleName from './components/title-name';
import TitlePlaylist from './components/title-playlist';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
        <Navigation />
        <div className="main__centerblock centerblock">
         < Search />
         < TitleName />
    < Filter />
    <div className="centerblock__content">
      < TitlePlaylist />
      < Content />
    </div>
      </div>
        <Recom />
        </main>
         <BarAudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
