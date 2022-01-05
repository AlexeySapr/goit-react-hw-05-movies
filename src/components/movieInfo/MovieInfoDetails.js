import s from './MovieInfoDetails.module.css';
const MovieInfoDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  console.log('genres: ', genres);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{`User Score: ${vote_average * 10 + '%'}`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieInfoDetails;
