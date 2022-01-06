import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log('location: ', location);

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ol>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
