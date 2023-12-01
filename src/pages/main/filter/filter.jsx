import "../../../App"
import React from 'react';
import { useState } from 'react';
import users from "../content/content-item.js";


import * as S from "./filter-style.js";



const Filter = ({tracks}) => {
  const [selectedCategory, setVisible] = useState(null); 
  
 
  return (
    <S.CentrblockFilter>
        <S.ContentFilterTitle >Искать по:</S.ContentFilterTitle >
        <AuthorFilter Author="исполнителю" tracks={tracks}
        onClick={() => {selectedCategory !== "Author" ? setVisible("Author") : setVisible(null)}}
        isOpen={selectedCategory === "Author"}/>
        <YearFilter year="году выпуска" tracks={tracks}
        onClick={() => {selectedCategory !== "year" ? setVisible("year") : setVisible(null)}}
        isOpen={selectedCategory === "year"}/>
        <GenreFilter genre="жанру" tracks={tracks}
        onClick={() => {selectedCategory !== "genre" ? setVisible("genre") : setVisible(null)}}
        isOpen={selectedCategory === "genre"}/>
    </S.CentrblockFilter>
  );

}; 

export default Filter

const AuthorFilter = (props) => {
  
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>
        {props.Author}
        {props.isOpen && <AuthorItemList tracks={props.tracks}/> } 
      </S.FilterButton> 
  )
}

const YearFilter = (props) => {
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>
        {props.year}
        {props.isOpen && <YearItemList tracks={props.tracks}/> }
      </S.FilterButton > 
  )
}
const GenreFilter = (props) => {
  return (
    <S.FilterButton  activecolor={props.isOpen ? "#B672FF" : ""} 
    activeborder={props.isOpen ? "1px solid #B672FF" : "" } onClick={props.onClick}>{props.genre}
    {props.isOpen && <GenreItemList tracks={props.tracks}/>}
    </S.FilterButton>
    
      
  )
}

const AuthorItemList = ({tracks}) => { 
  return ( 
        <S.ItemAuthorList>
                  <S.AuthorList>
                    <S.AuthorItem>
                    <AuthorArr tracks={tracks}/>
                    </S.AuthorItem>
                  </S.AuthorList>
          </S.ItemAuthorList>
      )
}
const YearItemList = ({tracks}) => {
  return (
    <S.YearList>
              <S.YearItem>
                <S.YearItemEl>
                 <YearArr tracks={tracks}/>
                </S.YearItemEl>
              </S.YearItem>
            </S.YearList>

  )
}

const GenreItemList = ({tracks}) => {
  return (
  
      <S.GenreItemList>
                <S.AuthorList>
                  <S.GenreItem>
                  <GenreArr tracks={tracks}/>
                  </S.GenreItem>
                </S.AuthorList>
              </S.GenreItemList>
  
  )

 
  
}
const AuthorArr = ({tracks}) => {
  return (
    tracks.map((track) => {
      return ( 
        <S.FilterLink key={track.id}>{track.author}</S.FilterLink>
      )
    })
  )
  
}

const GenreArr = ({tracks}) => {
  return (
    tracks.map((track) => {
      return ( 
        <S.FilterLink key={track.id}>{track.genre}</S.FilterLink>
      )
    })
  )
  
}
const YearArr = () => {
  return (
    users.map((user) => {
      return ( 
        <S.FilterLink key={user.id}>{user.year}</S.FilterLink>
      )
    })
  )
  
}