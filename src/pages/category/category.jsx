import "../../App"
import React from 'react';
import * as S from "./category-style";
import BarItem from "../main/sidebar/bar-content";
import { useParams } from "react-router-dom";



const Category = () => {
    const params = useParams();
    const item = BarItem.find((item) => item.id === Number(params.id))
 
    return (
        <S.Container>
           {item.text}
        </S.Container>
    )
};

export default Category;