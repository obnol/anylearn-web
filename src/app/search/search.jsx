import { useEffect } from 'react';
import SearchBar from '../home/components/SearchBar';
import Filters from './components/filters';
import Animated from '../commons/Animated';

var props = {
    distance: 0,
    duration: 0,
    categories: []
};

const onStart = () => {
    let params = window.location.href.split("?");
    if (params.length > 1)
    {
        let variables = params[1].split("%2C");
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
            <Filters />
        </Animated>
        {/*<Category />*/}
        </>
    );
};

export default Search;