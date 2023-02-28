import { API_URL, API_KEY } from './settings.js';

export default function getTrendingSearches() {
	
	const API = `${API_URL}/trending/searches?api_key=${API_KEY}`;

	return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = [] } = response;
      
      return data;
    });
};