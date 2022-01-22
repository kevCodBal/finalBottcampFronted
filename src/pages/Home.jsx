import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import styled from 'styled-components';

const Titlea = styled.h1`
    color:gray;
    margin-bottom: 20px;
    margin-left: 500px;
`;

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Titlea>CATEGORIAS</Titlea>
        <Categories/>
        <Titlea>Las Mejores Peliculas</Titlea>
        <Movies/>
        <Footer/>
    </div>
    

  )
};

export default Home;
