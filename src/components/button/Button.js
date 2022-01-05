import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onBackClick }) => {
  return (
    <button type="button" className={s.button} onClick={onBackClick}>
      Back
    </button>
  );
};

Button.propTypes = {
  loadMoreBtn: PropTypes.func,
};

export default Button;
