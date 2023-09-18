
import './App.css';
import BarAudioPlayer from './components/ player';
import Navigation from './components/nav';
import Recom from './components/recom';
import Tracks from './components/tracks';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
        <Navigation />
        <Tracks />
        <Recom />
        </main>
         <BarAudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
