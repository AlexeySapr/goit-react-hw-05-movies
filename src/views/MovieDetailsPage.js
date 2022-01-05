import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import Button from '../components/button/Button';

import apiService from '../services/movieAPI.js';
import MovieInfoDetails from '../components/movieInfo/MovieInfoDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const param = useParams();

  useEffect(() => {
    apiService
      .getMovieById(param.movieID)
      .then(resp => setMovie(resp))
      .catch(error => console.log(error));
  }, [param.movieID]);

  const navigate = useNavigate();
  const returnBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <PageTitle title={'Movie Details'} />
      {movie === null ? <p>...Loading</p> : <MovieInfoDetails movie={movie} />}
      <Button onBackClick={returnBack} />
    </Container>
  );
};

export default MovieDetailsPage;
