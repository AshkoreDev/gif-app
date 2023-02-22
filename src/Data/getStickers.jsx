import { API_URL, API_KEY } from './settings.jsx';

function getStickers({keyword = 'panda', page = 0, limit = 6} = {}) {

  const API = `${API_URL}/stickers/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g`;

  return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = []} = response;

      if(Array.isArray(data)) {

        const stickers = data.map(image => {

          const { images, id, title } = image;
          const { url } = images.downsized_medium;

          return { id, title, url };
        })
        return stickers;
      }
    })
};

export default getStickers;