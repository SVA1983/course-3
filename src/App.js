
import './App.css';
import BarAudioPlayer from './components/player/ player';
import Navigation from './components/nav-burger/nav-burger';
import Recom from './components/sidebar/sidebar';
import Search from './components/search/search';
import Content from './components/content/content';
import Filter from './components/filter/filter';
import TitleName from './components/title-name/title-name';
import TitlePlaylist from './components/content-title/content-title';

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
