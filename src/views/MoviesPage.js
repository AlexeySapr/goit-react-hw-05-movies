import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import apiService from '../services/movieAPI';

import Container from '../components/container/Container';
import Searchbar from '../components/searchbar/Searchbar';
import MovieList from '../components/movieList/MovieList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsQuery = searchParams.get('query');

  const location = useLocation();
  console.log('location: ', location);

  //при изменении запроса в форме поиска фильмов
  useEffect(() => {
    if (!query) {
      return;
    }

    setSearchParams({ query });
  }, [query, setSearchParams]);

  //при изменении запроса в поисковой строке
  useEffect(() => {
    if (!searchParamsQuery) {
      return;
    }

    setIsLoading(true);
    apiService.searchQuery = searchParamsQuery;
    apiService
      .getMoviesByQuery()
      .then(resp => {
        setMovies(resp.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [searchParamsQuery]);

  //при сабмите формы поиска
  const HandleSubmit = query => {
    setQuery(query);
  };

  return (
    <Container>
      <Searchbar onSubmit={HandleSubmit} />
      {isLoading ? <p>...Loading</p> : <MovieList movies={movies} />}
    </Container>
  );
};

export default MoviesPage;
