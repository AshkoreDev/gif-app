import  { API_URL, API_KEY } from './settings.js';

export default function getGifs({ limit = 6, keyword = 'panda', page = 0 } = {}) {
	
	const API = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g`;

	return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = [] } = response;

      if(Array.isArray(data)) {

        const gifs = data.map(image => {

          const { images, id, title } = image;
          const { url } = images.downsized_medium;

          return { id, title, url };
        })

        return gifs;
      }
    });
};