import { useEffect } from 'react';
import SearchBar from '../home/components/SearchBar';
import Filters from './components/filters';
import Animated from '../commons/Animated';
import SearchResults from './components/searchResults';
var props = {
    distance: 0,
    duration: 0,
    categories: []
};

var hasOptions = false;

const onStart = () => {
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
                let cats = variables[2].split("&");
                for (const cat in cats) 
                {
                    props.categories.add(cat);
                }
            }
        }
        console.log(variables);
    }
}

const Search = () =>
{
    onStart();
    return(
        <>
        <Animated>
            <SearchBar/>
            {
                hasOptions ? (
                    <Filters values={props}/>
                ) : (
                    <Filters />
                )
            }
            <SearchResults />
        </Animated>
        {/*<Category />*/}
        </>
    );
};

export default Search;