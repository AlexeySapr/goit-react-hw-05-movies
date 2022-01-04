import React, { useState, useEffect } from 'react';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import apiService from '../services/movieAPI.js';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiService.getDayTrandingMovies().then(resp => setMovies(resp.results));
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today'} />
      <ul>
        {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </Container>
  );
};

export default HomePage;
