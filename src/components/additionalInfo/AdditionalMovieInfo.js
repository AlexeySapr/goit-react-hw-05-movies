import { NavLink, Outlet } from 'react-router-dom';
import s from './AdditionalMovieInfo.module.css';

const AdditionalMovieInfo = () => {
  return (
    <>
      <h3 className={s.title}>Additional Information</h3>
      <ul className={s.list}>
        <li>
          <NavLink to="cast" className={s.link}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={s.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default AdditionalMovieInfo;
