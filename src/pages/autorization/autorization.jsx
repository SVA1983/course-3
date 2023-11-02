import "../../App"

import React from 'react';
import * as S from "./autorization-style";
import { useState } from 'react';





const AutorizationUser = ({user, onAuthButtonClick}) => { 
    const [selectedCategory, setVisible] = useState(null); 
    
    return (
        <S.Container>
            <S.AutorizationBox>
                <S.AutorizationLogo>
                    <S.AutorizationImg src="img/logo_modal.png" alt="logo">     
                    </S.AutorizationImg>
                </S.AutorizationLogo>
                <S.AutorizationInput>
                    <S.AutorizationMail className="mail" type="email" placeholder="Почта">
                    </S.AutorizationMail>
                    <S.AutorizationPassword className="pass" type="password" placeholder="Пароль">
                    </S.AutorizationPassword>
                </S.AutorizationInput>
                <S.AutorizationButtonBox>
                    <ComeButton text="Войти" 
                    onClick={onAuthButtonClick} 
                    
                    isOpen={selectedCategory === "come"} link={user ? "/" : ""}/>
                    <RegButton text="Зарегестрироваться"
                    onClick={() => {selectedCategory !== "reg" ? setVisible("reg") : setVisible(null)}}
                    isOpen={selectedCategory === "reg"} link="/register"/>
                </S.AutorizationButtonBox>

            </S.AutorizationBox> 
        </S.Container>
    )
};

export default AutorizationUser;

const ComeButton = (props) => {  
    return (
        <S.AutorizationButtonCome
        activecolor={props.isOpen ? "#271A58" : ""} 
     onClick={props.onClick} to={props.link}>
        {props.come}
        {props.text}  
        </S.AutorizationButtonCome>

    )
};
const RegButton = (props) => {
    return (
        <S.AutorizationButtonReg
        activecolor={props.isOpen ? "#D0CECE" : ""} 
     onClick={props.onClick} to={props.link}>
        {props.come}
        {props.text}  
       </S.AutorizationButtonReg>

    )
}