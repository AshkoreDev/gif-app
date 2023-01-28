const KEY = 'YplHkpvGL28F1ag0OiTg0OTxBgVVfFmi';

function getStickers({keyword = 'panda'} = {}) {

  const API = `https://api.giphy.com/v1/stickers/search?api_key=${KEY}&q=${keyword}&limit=5&offset=0&rating=g`;

  return fetch(API)
    .then(res => res.json())
    .then(response => {

      const { data = []} = response;

      if(Array.isArray(data)) {

        const stickers = data.map(image => {

          const { images, id, title } = image;
          const { url } = images.downsized_medium;
          console.log(title);
          return { id, title, url };
        })

        return stickers;
      }
    })
};

export default getStickers;