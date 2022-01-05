import { Link, Outlet } from 'react-router-dom';

const AdditionalMovieInfo = () => {
  return (
    <>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <hr />
        <Outlet />
      </ul>
    </>
  );
};

export default AdditionalMovieInfo;
