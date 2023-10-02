
import "../../App.js";
import "./filter.css";
import React from 'react';
import "../../App.js";
import { useState } from 'react';
const Filter = () => {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
     < AutorFilter />
     < YearFilter/>
     <GenreFilter /> 
    </div>
 
    );

}; 

export default Filter

const AutorFilter = () => {
  const [visible, setVisible] = useState(false); 
  const FilterClick = () => {
    setVisible(!visible);
  }
  return (
    <div className="filter__button button-author _btn-text" onClick={FilterClick}>
        исполнителю
        {visible && <AutorItemList/>}
      </div> 
  )
}
const YearFilter = () => {
  const [visible, setVisible] = useState(false); 
  const FilterClick = () => {
    setVisible(!visible);
  }
  return (
    <div className="filter__button button-year _btn-text" onClick={FilterClick}>
        году выпуска
        {visible && <YearItemList/> }
      </div> 
  )
}
const GenreFilter = () => {
  const [visible, setVisible] = useState(false); 
  const FilterClick = () => {
    setVisible(!visible);
  }
  return (
    <div className="filter__button button-genre _btn-text" onClick={FilterClick}>жанру
    {visible && <GenreItemList/>}
    </div>
    
      
  )
}

const AutorItemList = () => {
  return (
    <div className="autor-item-list">
              <ul className="autor__list">
                <li className="autor__item">
                  <a href="#" className="filter__link">автор1</a>
                </li>
                <li className="autor__item">
                  <a href="#" className="filter__link">автор2</a>
                </li>
                <li className="autor__item">
                  <a href="#" className="filter__link">автор3</a>
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
                  <a href="#" className="filter__link">Поп</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Рок</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Джаз</a>
                </li>
              </ul>
            </div>

  )
}