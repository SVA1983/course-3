import styled from "styled-components";
import "../../App.js";
import "./nav-burger.css";
import { useState } from 'react';

const StyledBurger = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  color: red;
`;
// const Styled = styled.div;
const StyledBurgerLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
const StyledBurgerImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
const StyledButtonBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const StyledBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
const StyledNavMenu = styled.div`
  display: block;
  visibility: visible;
`;
const StyledMenuList = styled.ul`
  padding: 18px 0 10px 0;
`;
const StyledMenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;
const StyledMenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const Burger = () => { 
  const [visible, setVisible] = useState(false); 
  const MenuClick = () => 
    setVisible(!visible) ;
    
  return ( 
    
    <StyledBurger>
            <StyledBurgerLogo>
              <StyledBurgerImg src="img/logo.png" alt="logo" />
            </StyledBurgerLogo>
            <StyledButtonBurger onClick={MenuClick}>
              <StyledBurgerLine></StyledBurgerLine>
              <StyledBurgerLine></StyledBurgerLine>
              <StyledBurgerLine></StyledBurgerLine>
            </StyledButtonBurger>
            {visible && < MenuBurger />}
            
    </StyledBurger>
    
  );

}; 

export default Burger



const MenuBurger = () => {
  return (
    <StyledNavMenu>
              <StyledMenuList>
                <StyledMenuItem>
                  <MenuLink item="Главное"
                  link="#"/>
                </StyledMenuItem>
                <StyledMenuItem>
                <MenuLink item="Плейлист"
                  link="#"/>
                </StyledMenuItem>
                <StyledMenuItem>
                <MenuLink item="Войти"
                  link="../signin.html"/>
                </StyledMenuItem>
              </StyledMenuList>
            </StyledNavMenu>

  )
}

const MenuLink = (props) => {
  return (
    <StyledMenuLink href={props.link}>{props.item}</StyledMenuLink>

  )
}
