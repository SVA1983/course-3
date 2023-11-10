
import './App.css';
import { AppRoutes } from './routes';
import { useState } from 'react';

function App() { 
  const isAuth = localStorage.getItem("user") ? true : false;
  const [user, setUser] = useState(isAuth);
  

  const handleLogin= () => {setUser(true);
  localStorage.setItem("user", "user"); console.log(localStorage);
}
  const outLogin= () => {setUser(false); localStorage.clear(); console.log(localStorage);
   

  }; 
  



  return (
    <div className="wrapper">
      <AppRoutes handleLogin={handleLogin} outLogin={outLogin} user={user}/> 
      
    </div>
  );
}

export default App;
