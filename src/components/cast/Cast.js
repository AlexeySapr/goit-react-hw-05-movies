import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/movieAPI';
import CastList from './CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const param = useParams();

  useEffect(() => {
    apiService
      .getMovieCredits(param.movieID)
      .then(resp => setCast(resp.cast))
      .catch(error => console.log(error));
  }, [param.movieID]);

  return <>{cast === null ? <p>...Loading</p> : <CastList cast={cast} />}</>;
};

export default Cast;
