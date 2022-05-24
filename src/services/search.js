import axios from "axios";

const baseURL = 'https://vgafib.org:9091/';

const getSearchResult = async (params) => {
    let URL = baseURL + "?distance="+params.distance+"&duration="+params.duration+"&categories="+params.categories;
    const response = await axios({
        url: URL,
        method: 'GET',
      });
}

export const SearchService = {getSearchResult};