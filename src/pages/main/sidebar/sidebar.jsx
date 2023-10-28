import "../../../App"
import * as S from "./sidebar-style.js";
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';
import BarItem from "./bar-content.jsx";


const SideBar = () => {
  return (
    <S.Sidebar>
    < SidePersonal />
    <S.SidebarBlock >
      <S.SidebarList>
       <SideBarItem />
       
      </S.SidebarList>
    </S.SidebarBlock >
  </S.Sidebar>
    );
}; 

export default SideBar

const SidePersonal = () => {
  
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <S.SidebarIcon>
        <S.SidebarSvg alt="logout">
          <S.SidebarPersonalIcon xlinkHref="img/icon/sprite.svg#logout"></S.SidebarPersonalIcon>
        </S.SidebarSvg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
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
     
        <S.SidebarItem key={item.id}>
              <S.SidebarLink href="#">
                <S.SidebarImg 
                  
                  src={visible? item.barImg : "img/SkeletonPlaylist.png"}
                  
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
    
      
    )
  })
  )

}

