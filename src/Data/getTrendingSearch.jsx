import { API_URL, API_KEY } from './settings.jsx';

function getTrendingSearch() {

  const API = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = []} = response;

      if(Array.isArray(data)) {
        
        return data;
      }
    })
};

export default getTrendingSearch;