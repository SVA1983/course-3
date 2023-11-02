import styled from "styled-components";
export const RegistrationBox = styled.div`
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
export const RegistrationInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
margin-top: 50px;

`;
export const RegistrationMail = styled.input`
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
export const RegistrationPassword = styled(RegistrationMail)`

`;
export const RegistrationRepeatPassword = styled(RegistrationMail)`

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
export const RegistrationLogo = styled.div`
margin-top: 35px;

   

`;
export const RegistrationImg = styled.img`
    width: 140px;
    height: 21px;
    top: 43px;
    left: 113px;
`;
export const RegistrationButtonBox = styled.div`
gap: 20px;
display: flex;
flex-direction: column;
margin-top: 35px;
`;
export const RegistrationButton = styled.a`
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
export const RegistrationButtonReg = styled(RegistrationButton)`
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

