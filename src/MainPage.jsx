
import './App.css';
import BarAudioPlayer from './pages/main/player/ player';
import Burger from './pages/main/nav-burger/nav-burger';
import SideBar from './pages/main/sidebar/sidebar';
import Search from './pages/main/search/search';
import Content from './pages/main/content/content';
import Filter from './pages/main/filter/filter';
import TitleName from './pages/main/title-name/title-name'
import TitlePlaylist from './pages/main/content-title/content-title';

function Main() {
  return ( 
    
      <div className="container">
        <main className="main">
        <Burger />
        <div className="main__centerblock centerblock">
         < Search />
         < TitleName />
    < Filter />
    <div className="centerblock__content">
      < TitlePlaylist />
      < Content />
    </div>
      </div>
        <SideBar />
        </main>
         <BarAudioPlayer />
        <footer className="footer"></footer>
      </div>
      
    
  );
}

export default Main;
