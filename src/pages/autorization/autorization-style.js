import styled from "styled-components";
import { Link } from "react-router-dom";
export const AutorizationBox = styled.div`
width: 366px;
height: 439px;
top: 320.5px;
left: 777px;
border-radius: 12px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
`;
export const AutorizationInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
margin-top: 50px;

`;
export const AutorizationMail = styled.input`
border: none;
border-bottom: 1px solid #D0CECE;
width: 278.5px;
padding-bottom: 8px;
outline:none;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.003em;
text-align: left;
&::placeholder {
    font-family: StratosSkyeng;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.003em;
    text-align: left;
    color: #E1E1E1;  
}
`;
export const AutorizationPassword = styled(AutorizationMail)`

`;
export const Container = styled.div`
    max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const AutorizationLogo = styled.div`
margin-top: 35px;

   

`;
export const AutorizationImg = styled.img`
    width: 140px;
    height: 21px;
    top: 43px;
    left: 113px;
`;
export const AutorizationButtonBox = styled.div`
gap: 20px;
display: flex;
flex-direction: column;
margin-top: 63px;
`;
export const AutorizationButtonCome = styled(Link)`
width: 278px;
height: 52px;
top: 268px;
left: 41px;
border: 1px solid #D0CECE;
border-radius: 6px;
color: white;
background-color: #580EA2;
display: flex;
align-items: center;
justify-content: space-around;
&:hover {
    background-color: #B672FF;
    
  };
  &:hover {
    background-color: ${props => props.activecolor};
    
  };
color: ${props => props.activecolorText};
background-color: ${props => props.activecolor};
   
`;
export const AutorizationButtonReg = styled(AutorizationButtonCome)`
color: black;
background-color: white;
&:hover {
    background-color: #F4F5F6; 
  };
  &:hover {
    background-color: ${props => props.activecolor};
    
  };
color: ${props => props.activecolorText};
background-color: ${props => props.activecolor};

`;

