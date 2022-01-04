import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
console.log(s);

const Navigation = () => {
  console.log('props: ', this);
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: 18 + 'px',
            marginRight: 15 + 'px',
            color: isActive ? 'darkviolet' : 'black',
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: 18 + 'px',
            marginRight: 15 + 'px',
            color: isActive ? 'darkviolet' : 'black',
          };
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
