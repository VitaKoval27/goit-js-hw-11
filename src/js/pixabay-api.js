import axios from 'axios';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        q: query,
        key: '51327583-eda9110ddf8c3e7e62438a086',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })

    .then(response => response.data)
    .catch(error => {
      console.error('ERROR:', error);
      throw error;
    });
}
