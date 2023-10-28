import "../../App"
// import { useState } from 'react';
import React from 'react';
import * as S from "./autorization-style";
import { useState } from 'react';


const AutorizationUser = () => {
    const [selectedCategory, setVisible] = useState(null); 
    return (
        <S.Container>
            <S.AutorizationBox>
                <S.AutorizationLogo>
                    <S.AutorizationImg src="img/logo_modal.png" alt="logo">     
                    </S.AutorizationImg>
                </S.AutorizationLogo>
                <S.AutorizationInput>
                    <S.AutorizationMail type="email" placeholder="Почта">
                    </S.AutorizationMail>
                    <S.AutorizationPassword type="password" placeholder="Пароль">
                    </S.AutorizationPassword>
                </S.AutorizationInput>
                <S.AutorizationButtonBox>
                    <ComeButton text="Войти"
                    onClick={() => {selectedCategory !== "come" ? setVisible("come") : setVisible(null)}}
                    isOpen={selectedCategory === "come"}/>
                    <RegButton text="Зарегестрироваться"
                    onClick={() => {selectedCategory !== "reg" ? setVisible("reg") : setVisible(null)}}
                    isOpen={selectedCategory === "reg"}/>
                </S.AutorizationButtonBox>

            </S.AutorizationBox>
        </S.Container>
    )
};

export default AutorizationUser;

const ComeButton = (props) => {
    return (
        <S.AutorizationButtonCome
        activeColor={props.isOpen ? "#271A58" : ""} 
     onClick={props.onClick}>
        {props.come}
        {props.text}   
        </S.AutorizationButtonCome>

    )
};
const RegButton = (props) => {
    return (
        <S.AutorizationButtonReg
        activeColor={props.isOpen ? "#D0CECE" : ""} 
     onClick={props.onClick}>
        {props.come}
        {props.text}  
       </S.AutorizationButtonReg>

    )
}