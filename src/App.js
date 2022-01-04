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

const App = () => {
  return (
    <>
      <Appbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};

//контейнер
//апп

export default App;
