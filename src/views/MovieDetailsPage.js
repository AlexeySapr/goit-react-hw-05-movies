import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import Button from '../components/button/Button';

import apiService from '../services/movieAPI.js';
import MovieInfoDetails from '../components/movieInfo/MovieInfoDetails';
import AdditionalMovieInfo from '../components/additionalInfo/AdditionalMovieInfo';

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
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <PageTitle title={'Movie Details'} />
      <Button onBackClick={returnBack} />
      {movie === null ? <p>...Loading</p> : <MovieInfoDetails movie={movie} />}
      <hr />
      <AdditionalMovieInfo />
    </Container>
  );
};

export default MovieDetailsPage;
