import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.query;
    onSubmit(value);
  };

  return (
    <div className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          name="query"
        />
        <button type="submit" className={s.formBtn}>
          <IconContext.Provider value={{ className: `${s.searchIcon}` }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
