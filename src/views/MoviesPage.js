import React, { useState } from 'react';

import Container from '../components/container/Container';
import Searchbar from '../components/searchbar/Searchbar';

const MoviesPage = () => {
  const [query, setQuery] = useState('');

  const HandleSubmit = query => {
    console.log('query: ', query);
    setQuery(query);
  };

  return (
    <Container>
      <Searchbar onSubmit={HandleSubmit} />
    </Container>
  );
};

export default MoviesPage;
