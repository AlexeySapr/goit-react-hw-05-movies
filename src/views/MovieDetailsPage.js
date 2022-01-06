import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import Button from '../components/button/Button';

import apiService from '../services/movieAPI.js';
import MovieInfoDetails from '../components/movieInfo/MovieInfoDetails';
import AdditionalMovieInfo from '../components/additionalInfo/AdditionalMovieInfo';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const param = useParams();
  console.log('param: ', param);
  const location = useLocation();
  console.log('location: ', location);

  useEffect(() => {
    apiService
      .getMovieById(param.movieID)
      .then(resp => setMovie(resp))
      .catch(error => console.error(error));
  }, [param.movieID]);

  const navigate = useNavigate();
  const returnBack = () => {
    navigate(-1);
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
