import "../../App.js";
import "./sidebar.css";
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';
import BarItem from "./bar-content.jsx";

const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
    < SidePersonal />
    <div className="sidebar__block">
      <div className="sidebar__list">
       <SideBarItem />
       
      </div>
    </div>
  </div>
    );
}; 

export default SideBar

const SidePersonal = () => {
  
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__icon">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  )
}
const SideBarItem = () => { 
  const [visible, setVisible] = useState(false); 
  setTimeout(() => {
    setVisible(true);
  }, 3000);
  return (
  BarItem.map((item) => {
    return (
     
        <div className="sidebar__item" key={item.id}>
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img" 
                  
                  src={visible? item.barImg : "img/SkeletonPlaylist.png"}
                  
                  alt="day's playlist"
                />
              </a>
            </div>
    
      
    )
  })
  )

}