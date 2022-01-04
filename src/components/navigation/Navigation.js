import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => {
          return isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink;
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
