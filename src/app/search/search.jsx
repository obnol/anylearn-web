import { useEffect } from 'react';
import SearchBar from '../home/components/SearchBar';
import Filters from './components/filters';

const Search = () =>
{
    return(
        <>
        <SearchBar/>
        <Filters />
        {/*<Category />*/}
        </>
    );
};

export default Search;