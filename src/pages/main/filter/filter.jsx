import "../../../App"
import React from 'react';
import { useState } from 'react';
import users from "../content/content-item.js";
import * as S from "./filter-style.js";



const Filter = () => {
  const [selectedCategory, setVisible] = useState(null); 
 
  return (
    <S.CentrblockFilter>
        <S.ContentFilterTitle >Искать по:</S.ContentFilterTitle >
        <AutorFilter autor="исполнителю"
        onClick={() => {selectedCategory !== "autor" ? setVisible("autor") : setVisible(null)}}
        isOpen={selectedCategory === "autor"}/>
        <YearFilter year="году выпуска"
        onClick={() => {selectedCategory !== "year" ? setVisible("year") : setVisible(null)}}
        isOpen={selectedCategory === "year"}/>
        <GenreFilter genre="жанру"
        onClick={() => {selectedCategory !== "genre" ? setVisible("genre") : setVisible(null)}}
        isOpen={selectedCategory === "genre"}/>
    </S.CentrblockFilter>
  );

}; 

export default Filter

const AutorFilter = (props) => {
  
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>
        {props.autor}
        {props.isOpen && <AutorItemList/> } 
      </S.FilterButton> 
  )
}

const YearFilter = (props) => {
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>
        {props.year}
        {props.isOpen && <YearItemList/> }
      </S.FilterButton > 
  )
}
const GenreFilter = (props) => {
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>{props.genre}
    {props.isOpen && <GenreItemList/>}
    </S.FilterButton>
    
      
  )
}

const AutorItemList = () => {
  return ( 
        <S.ItemAutorList>
                  <S.AutorList>
                    <S.AutorItem>
                    <AutorArr/>
                    </S.AutorItem>
                  </S.AutorList>
          </S.ItemAutorList>
      )
}
const YearItemList = () => {
  return (
    <S.YearList>
              <S.YearItem>
                <S.YearItemEl>
                  <S.FilterLink>1993</S.FilterLink>
                </S.YearItemEl>
                <S.YearItemEl>
                  <S.FilterLink>1994</S.FilterLink>
                </S.YearItemEl>
                <S.YearItemEl>
                  <S.FilterLink>1995</S.FilterLink>
                </S.YearItemEl>
              </S.YearItem>
            </S.YearList>

  )
}

const GenreItemList = () => {
  return (
  
      <S.GenreItemList>
                <S.AutorList>
                  <S.GenreItem>
                  <GenreArr/>
                  </S.GenreItem>
                </S.AutorList>
              </S.GenreItemList>
  
  )

 
  
}
const AutorArr = () => {
  return (
    users.map((user) => {
      return ( 
        <S.FilterLink key={user.id}>{user.autorName}</S.FilterLink>
      )
    })
  )
  
}

const GenreArr = () => {
  return (
    users.map((user) => {
      return ( 
        <S.FilterLink key={user.id}>{user.genre}</S.FilterLink>
      )
    })
  )
  
}