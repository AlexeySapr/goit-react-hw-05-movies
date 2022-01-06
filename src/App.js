import './App.css';
import { Routes, Route } from 'react-router-dom';

import Appbar from './components/appbar/Appbar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './components/cast/Cast';
import Reviews from './components/reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieID" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

//контейнер
//апп

export default App;
