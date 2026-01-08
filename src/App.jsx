import './assets/styles/reset.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import React from 'react';


function App() {

  const [search, setSearch] = React.useState('');

  return (
    <>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <Gallery search={search} /> 
      <Footer />     
    </>
  )
}

export default App
