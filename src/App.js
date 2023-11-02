
import './App.css';
import { AppRoutes } from './routes';
import AutorizationUser from './pages/autorization/autorization';
import { useState } from 'react';


function App() { 
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser(true);

  const handleLogout = () => setUser(null);

  return (
    <div className="wrapper">
      {user ? <AppRoutes user={user}/> : <AutorizationUser  user={user} onAuthButtonClick={handleLogin} />}
      
    </div>
  );
}

export default App;
