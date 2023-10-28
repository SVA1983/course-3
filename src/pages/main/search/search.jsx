import "../../../App"
import React from 'react';
import * as S from "./search-style.js";





const Search = () => {
  return (
    <S.CenterblockSearch>
    <S.SearchSvg>
      <S.SearchIcon xlinkHref="img/icon/sprite.svg#icon-search"></S.SearchIcon>
    </S.SearchSvg>
    <S.SearchText
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </S.CenterblockSearch>
    );

}; 

export default Search