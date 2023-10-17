import styled from "styled-components";

export const CentrblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
export const ContentFilterTitle = styled.div`
  font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;
export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
&:hover {
  color:#B672FF;
  border: 1px solid #B672FF;
};
&:not(:last-child) {
  margin-right: 10px;
};
color: ${props => props.activeColor};
border: ${props => props.activeBorder};
`;
export const ItemAutorList = styled.div`
  width: 300px;
  height: 305px;
  top: 288px;
  left: 445px;
  padding: 34px;
  border-radius: 12px;
  gap: 10px;
  background-color: #313131;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const AutorList = styled.ul`
`;
export const AutorItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 215px;
`;
export const YearList = styled.div`
    width: 248px;
    top: 288px;
    left: 600px;
    padding-left: 34px;
    border-radius: 12px;
    gap: 10px;
    background-color: #313131;
    position: absolute;
    opacity: 1;
`;
export const YearItem = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;
  height: 237px;
  gap: 24px
`;
export const YearItemEl = styled.div`

`;
export const FilterLink = styled.div`
    font-family: StratosSkyeng;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    :hover {
      text-decoration: underline;
      color: #B672FF;
    }
`;
export const GenreItemList = styled.div`
    width: 196px;
    height: 221px;
    top: 288px;
    padding: 34px;
    border-radius: 12px;
    gap: 10px;
    background-color: #313131;
    position: absolute;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
export const GenreList = styled.div`
`;
export const GenreItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;