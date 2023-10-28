import "../../App"
import React from 'react';
import * as S from "./registration-style";
import { useState } from 'react';


const RegistrationUser = () => {
    const [selectedCategory, setVisible] = useState(null); 
    return (
        <S.Container>
            <S.RegistrationBox>
                <S.RegistrationLogo>
                    <S.RegistrationImg src="img/logo_modal.png" alt="logo">     
                    </S.RegistrationImg>
                </S.RegistrationLogo>
                <S.RegistrationInput>
                    <S.RegistrationMail type="email" placeholder="Почта">
                    </S.RegistrationMail>
                    <S.RegistrationPassword type="password" placeholder="Пароль">
                    </S.RegistrationPassword>
                    <S.RegistrationRepeatPassword type="password" placeholder="Повторите пароль">
                    </S.RegistrationRepeatPassword>
                </S.RegistrationInput>
                <S.RegistrationButtonBox>
                    <RegButton text="Зарегестрироваться"
                    onClick={() => {selectedCategory !== "come" ? setVisible("come") : setVisible(null)}}
                    isOpen={selectedCategory === "come"}/>
                </S.RegistrationButtonBox>

            </S.RegistrationBox>
        </S.Container>
    )
};

export default RegistrationUser;

const RegButton = (props) => {
    return (
        <S.RegistrationButton
        activeColor={props.isOpen ? "#271A58" : ""} 
     onClick={props.onClick}>
        {props.come}
        {props.text}   
        </S.RegistrationButton>

    )
};
