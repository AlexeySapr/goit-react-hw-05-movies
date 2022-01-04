import Container from '../../components/container/Container';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <h1 className={s.title}>Trending today</h1>
    </Container>
  );
};

export default HomePage;
