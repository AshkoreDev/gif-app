import { API_URL, API_KEY } from './settings.jsx';

function getTrendingGifs() {

  const API = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=20&offset=0&rating=g`;

  return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = []} = response;

      if(Array.isArray(data)) {

        const trendingGifs = data.map(image => {

          const { images, id, title } = image;
          const { url } = images.downsized_medium;

          return { id, title, url };
        })
        return trendingGifs;
      }
    })
};

export default getTrendingGifs;