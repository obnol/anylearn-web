import React, { useState } from "react";
import { SearchService } from "../../../services/search";
import dummysearch from "../dummysearch.json";
import { FiFilter } from 'react-icons/fi';
import Animated from "../../commons/Animated";
import { Route } from "react-router-dom";
import {Item} from "../../home/components/Category";

var result;

const updateResult = (props) => {
    result = SearchService.getSearchResult(props.filters);
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