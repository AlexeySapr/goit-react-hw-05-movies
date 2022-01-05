import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import apiService from '../services/movieAPI.js';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // let location = useLocation();
  // console.log('location: ', location);
  // const match = useMatch(location.pathname);
  // // console.log('match: ', match);

  // let param = useParams();
  // console.log('param: ', param);

  useEffect(() => {
    apiService.getDayTrandingMovies().then(resp => setMovies(resp.results));
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
