
import "../../App.js";
import "./filter.css";
import React from 'react';
import "../../App.js";
import { useState } from 'react';
import users from "../content/content-item.js";
const Filter = () => {
  const [selectedCategory, setVisible] = useState(null); 
 
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
        <AutorFilter autor="исполнителю"
        onClick={() => {selectedCategory != "autor" ? setVisible("autor") : setVisible(null)}}
        isOpen={selectedCategory === "autor"}/>
        <YearFilter year="году выпуска"
        onClick={() => {selectedCategory != "year" ? setVisible("year") : setVisible(null)}}
        isOpen={selectedCategory === "year"}/>
        <GenreFilter genre="жанру"
        onClick={() => {selectedCategory != "genre" ? setVisible("genre") : setVisible(null)}}
        isOpen={selectedCategory === "genre"}/>
        ;
       
      </div>
    );

}; 

export default Filter

const AutorFilter = (props) => {
  
  return (
    <div className={props.isOpen ? "filter__button button-year _btn-text active" : "filter__button button-year _btn-text"} onClick={props.onClick}>
        {props.autor}
        {props.isOpen && <AutorItemList/> } 
      </div> 
  )
}

const YearFilter = (props) => {
  return (
    <div className={props.isOpen ? "filter__button button-year _btn-text active" : "filter__button button-year _btn-text"} onClick={props.onClick}>
        {props.year}
        {props.isOpen && <YearItemList/> }
      </div> 
  )
}
const GenreFilter = (props) => {
  return (
    <div className={props.isOpen ? "filter__button button-year _btn-text active" : "filter__button button-year _btn-text"} onClick={props.onClick}>{props.genre}
    {props.isOpen && <GenreItemList/>}
    </div>
    
      
  )
}

const AutorItemList = () => {
  return ( 
        <div className="autor-item-list">
                  <ul className="autor__list">
                    <li className="autor__item">
                    <AutorArr/>
                      
                    </li>
                  </ul>
          </div>
      )
}
const YearItemList = () => {
  return (
    <div className="year-item-list">
              <ul className="year__list">
                <li className="year__list__item">
                  <a href="#" className="filter__link">1993</a>
                </li>
                <li className="year__item">
                  <a href="#" className="filter__link">1994</a>
                </li>
                <li className="year__item">
                  <a href="#" className="filter__link">1995</a>
                </li>
              </ul>
            </div>

  )
}

const GenreItemList = () => {
  return (
  
      <div className="genre-item-list">
                <ul className="genre__list">
                  <li className="genre__list__item">
                  <GenreArr/>
                  </li>
                </ul>
              </div>
  
  )

 
  
}
const AutorArr = () => {
  return (
    users.map((user) => {
      return ( 
        <a href="#" className="filter__link" key={user.id}>{user.autorName}</a>
      )
    })
  )
  
}

const GenreArr = () => {
  return (
    users.map((user) => {
      return ( 
        <a href="#" className="filter__link" key={user.id}>{user.genre}</a>
      )
    })
  )
  
}