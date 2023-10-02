import "../../App.js";
import "./sidebar.css";
import React from 'react';
const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
    < SidePersonal />
    <div className="sidebar__block">
      <div className="sidebar__list">
       <SideBarItem img="img/playlist01.png" />
       <SideBarItem img="img/playlist02.png" />
       <SideBarItem img="img/playlist03.png" />
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
const SideBarItem = (props) => {
  return (
    <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              
              src={props.img}
              
              alt="day's playlist"
            />
          </a>
        </div>

  )
}