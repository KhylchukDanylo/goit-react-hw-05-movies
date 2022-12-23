import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cd5b2d3acc514f77d882945a59cba433';

export const getSearchMovies = async value => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  );

  return response.data.results;
};
