
import "../../App.js";
import { useState } from 'react';
import * as S from './nav-burger-style'


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
                  link="#"/>
                </S.MenuItem>
                <S.MenuItem>
                <MenuLink item="Плейлист"
                  link="#"/>
                </S.MenuItem>
                <S.MenuItem>
                <MenuLink item="Войти"
                  link="../signin.html"/>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>

  )
}
const MenuLink = (props) => {
  return (
    <S.MenuLink href={props.link}>{props.item}</S.MenuLink>

  )
}
