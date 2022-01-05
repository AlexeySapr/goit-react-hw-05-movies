import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Loader from 'react-loader-spinner';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Button from './components/button/Button';
// import ImageGallery from './components/imageGallery/ImageGallery';
// import Modal from './components/modal/Modal';
// import Searchbar from './components/searchbar/Searchbar';
// // import initData from './data/Data.json';
// import { searchService } from './services/searchAPI.js';

// import Container from './components/container/Container';
import Appbar from './components/appbar/Appbar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './components/cast/Cast';
import Reviews from './components/reviews/Reviews';

const App = () => {
  return (
    <>
      <Appbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieID" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

//контейнер
//апп

export default App;
