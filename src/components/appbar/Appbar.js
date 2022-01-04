import Navigation from '../navigation/Navigation';
import Container from '../container/Container';

import s from './Appbar.module.css';

const Appbar = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Appbar;
