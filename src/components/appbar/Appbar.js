import Navigation from '../navigation/Navigation';
import s from './Appbar.module.css';

const Appbar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default Appbar;
