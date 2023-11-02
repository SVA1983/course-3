import "../../../App"
import { useState } from 'react';
import AutorizationUser from "../../autorization/autorization";

import * as S from './nav-burger-style.js'


export const Burger = () => { 
   const [visible, setVisible] = useState(false); 
  const MenuClick = () => 
    setVisible(!visible) ;
    
  return ( 
    
    <S.Burger>
            <S.BurgerLogo>
              <S.BurgerImg src="img/logo.png" alt="logo" />
            </S.BurgerLogo>
            <S.ButtonBurger onClick={MenuClick}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.ButtonBurger>
            {visible && < MenuBurger />}
            
    </S.Burger>
    
  );

}; 

export default Burger


const MenuBurger = () => {
  return (
    <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <MenuLink item="Главное"
                  link="/"/>
                </S.MenuItem>
                <S.MenuItem>
                <MenuLink item="Плейлист"
                  link="/favorites"/>
                </S.MenuItem>
                <S.MenuItem>
                <MenuLink onClick={<AutorizationUser/>} item="Выйти"
                  link="/login"/>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>

  )
}
export const MenuLink = (props) => {
  return (
    <S.MenuLink onClick={props.onClick} to={props.link}>{props.item}</S.MenuLink>

  )
}
