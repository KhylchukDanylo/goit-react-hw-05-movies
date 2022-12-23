import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cd5b2d3acc514f77d882945a59cba433';

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
