import { KEY } from './key.jsx';

function getTrendingGifs() {

  const API = `https://api.giphy.com/v1/gifs/trending?api_key=${KEY}&limit=20&offset=0&rating=g`;

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