import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import apiService from '../services/movieAPI.js';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiService
      .getDayTrandingMovies()
      .then(resp => setMovies(resp.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today'} />
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default HomePage;
