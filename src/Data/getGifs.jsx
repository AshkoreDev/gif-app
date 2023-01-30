import { API_URL, API_KEY } from './settings.jsx';

function getGifs({keyword = 'panda'} = {}) {

  const API = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=g`;

  return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = []} = response;

      if(Array.isArray(data)) {

        const gifs = data.map(image => {

          const { images, id, title } = image;
          const { url } = images.downsized_medium;

          return { id, title, url };
        })
        return gifs;
      }
    })
};

export default getGifs;