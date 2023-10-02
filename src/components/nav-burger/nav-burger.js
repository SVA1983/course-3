import "../../App.js";
import "./nav-burger.css";

import { useState } from 'react';
const Burger = () => { 
  const [visible, setVisible] = useState(false); 
  const MenuClick = () => 
    setVisible(!visible) ;
    
  return ( 
    
    <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger" onClick={MenuClick}>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            {visible && < MenuBurger />}
            
    </nav>
    
  );

}; 

export default Burger

const MenuBurger = () => {
  return (
    <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">Войти</a>
                </li>
              </ul>
            </div>

  )
}
