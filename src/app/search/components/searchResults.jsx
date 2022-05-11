import React, { useState } from "react";
import Dummy from '../../dummy.json'
import { FiFilter } from 'react-icons/fi';
import Animated from "../../commons/Animated";
import { Route } from "react-router-dom";
import Category from "../../home/components/Category";
const updateResult = (props) => {
    //Pedir resultado de la búsqueda al backend
}

const SearchResults = (props) => {
    updateResult(props);
    return (
        <Animated>
            {Dummy.map((category, index) => (
                <>
                    <Category key={index} category={category} />
                </>
            ))}
        </Animated>
    );
}

export default SearchResults;