import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cd5b2d3acc514f77d882945a59cba433';

export const getMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response;
};
