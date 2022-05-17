import React, { useState } from "react";
import { SearchService } from "../../../services/search";
import dummysearch from "../dummysearch.json";
import { FiFilter } from 'react-icons/fi';
import Animated from "../../commons/Animated";
import { Route } from "react-router-dom";
import {Item} from "../../home/components/Category";

const CatList = ['Idiomas', 'Habilidades%20Personales', 'Tecnolog%C3%ADa', 'Historia%20y%20Antropolog%C3%ADa', 
'Sostenibilidad', 'Comunicaci%C3%B3n', 'Arte%20y%20Dise%C3%B1o', 'Ciencias%20M%C3%A9dicas', 'Finanzas']

var result;

const updateResult = (props) => {
    let j = 0;
    var data = props.filters;
    let hex = "";
    for (let i = 0; i < CatList.length; i++)
    {
        if (CatList[i] === data.categories[j])
        {
            hex += "1";
            j++;
        }
        else hex += "0";
    }
    hex = parseInt(hex, 2).toString(16);
    //result = SearchService.getSearchResult(data);
}

const SearchResults = (props) => {
    updateResult(props);
    return (
        <Animated>
            {dummysearch.courses.map((item) => (
                <div className="flex h-full w-full justify-center items-center mb-2">
                    <Item key={item.id} item={item} />
                </div>
            ))}
        </Animated>
    );
}

export default SearchResults;