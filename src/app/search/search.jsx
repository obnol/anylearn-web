import { useEffect } from 'react';
import SearchBar from '../home/components/SearchBar';
import Filters from './components/filters';
import Animated from '../commons/Animated';
import SearchResults from './components/searchResults';

var hasOptions = false;

const readQuery = () => {
    let props = {
        distance: 0,
        duration: 0,
        categories: []
    }
    let params = window.location.href.split("?");
    if (params.length > 1)
    {
        hasOptions = true;
        let variables = params[1].split("%2C");
        props.distance = (variables[0].split("="))[1];
        if (variables.length > 1) 
        {
            props.duration = (variables[1].split("="))[1];
            if (variables.length > 2)
            {
                let cats = variables[2].split("=")[1];
                props.categories = cats.split("&");
            }
        }
    }
    return props;
}

const Search = () =>
{
    return(
        <>
        <Animated>
            <SearchBar/>
            <Filters />
            <SearchResults filters={readQuery()}/>
        </Animated>
        {/*<Category />*/}
        </>
    );
};

export default Search;