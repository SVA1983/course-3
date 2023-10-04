
import "../../App.js";
import "./filter.css";
import React from 'react';
import { useState } from 'react';
import users from "../content/content-item.js";
const Filter = () => {

  const [autorFilter, setAutorVisible] = useState(false); 

const AutorFilter = () => {
  
  const FilterClick = () => {
    setAutorVisible(!autorFilter);
    setYearVisible(null);
    setGenreVisible(null)
  }
  return (
    <div className="filter__button button-author _btn-text" onClick={FilterClick}>
        исполнителю
        {autorFilter && <AutorItemList/>}
      </div> 
  )
}
const [yearFilter, setYearVisible] = useState(false); 
const YearFilter = () => {
  
  const FilterClick = () => {
    setYearVisible(!yearFilter);
    setAutorVisible(null);
    setGenreVisible(null);
    
  
  }
  return (
    <div className="filter__button button-year _btn-text" onClick={FilterClick}>
        году выпуска
        {yearFilter && <YearItemList/> }
        {!autorFilter}
      </div> 
  )
}
const [genreFilter, setGenreVisible] = useState(false); 
const GenreFilter = () => {
  const FilterClick = () => {
    setGenreVisible(!genreFilter);
    setYearVisible(null);
    setAutorVisible(null);
  }
  return (
    <div className="filter__button button-genre _btn-text" onClick={FilterClick}>жанру
    {genreFilter && <GenreItemList/>}
    </div>
    
      
  )
}
 
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
          <AutorFilter/>
          <YearFilter/>
          <GenreFilter/>
    </div>    
  );
}; 

export default Filter;



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
                  <a href="#" className="filter__link">Поп</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Рок</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Джаз</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Хиты</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Новинки</a>
                </li>
                <li className="genre__item">
                  <a href="#" className="filter__link">Зарубежные</a>
                </li>
              </ul>
            </div>

  )
}

const AutorArr = () => {
  return (
    users.map((user) => {
      return ( 
        <a href="#" className="filter__link">{user.autorName}</a>
      )
    })
  )
  
}