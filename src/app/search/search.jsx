import { useEffect } from 'react';
import SearchBar from '../home/components/SearchBar';
import Filters from './components/Filters';

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