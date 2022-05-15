import axios from "axios";

var baseURL = "";

const getSearchResult = async (params) => {
    console.log(params);
    let URL = baseURL + "?distance="+params.distance+"%2Cduration="+params.duration+"%2Ccategories="+params.categories;
    const response = await axios({
        url: URL,
        method: 'GET',
      });
}

export const SearchService = {getSearchResult};