import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';

import apiService from '../services/movieAPI.js';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);

  const param = useParams();
  console.log('param: ', param);

  useEffect(() => {
    apiService.getMovieById(param.movieID).then(resp => setMovie(resp));
  }, [param.movieID]);

  return (
    <Container>
      <PageTitle title={'Movie Details Page'} />
    </Container>
  );
};

export default MovieDetailsPage;
