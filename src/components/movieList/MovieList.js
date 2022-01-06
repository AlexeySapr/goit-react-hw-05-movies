import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
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

export default MovieList;
