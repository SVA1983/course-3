import "./App.css";
import { AppRoutes } from "./routes";
import { useState, useEffect } from "react";
import { getTrack } from "./api";

function App() {
  const isAuth = localStorage.getItem("user") ? true : false;
  const [user, setUser] = useState(isAuth);
  const [tracks, setTracks] = useState([]);
  const [addError, setAddError] = useState(null);


  useEffect(() => {
    getTrack().then((tracks) => { 
      setTracks(tracks);
    }).catch((error) => {
      setAddError(error)
      
    });;
  }, []);


  const handleLogin = () => {
    setUser(true);
    localStorage.setItem("user", "user");
    console.log(localStorage);
  };
  const outLogin = () => {
    setUser(false);
    localStorage.clear();
    console.log(localStorage);
  };


  return (
    <div className="wrapper">
      <AppRoutes
        handleLogin={handleLogin}
        tracks={tracks}
        setTracks={setTracks}
        outLogin={outLogin}
        user={user}
        addError={addError}
      />
    </div>
  );
}

export default App;
