const API_URL = `https://api.giphy.com/v1`;
const API_KEY = 'YplHkpvGL28F1ag0OiTg0OTxBgVVfFmi';

export default function getGifs({ keyword = 'panda' } = {}) {
	
	const API = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=5&rating=g`;

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