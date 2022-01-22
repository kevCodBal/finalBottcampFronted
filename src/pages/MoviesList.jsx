import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Movies from '../components/Movies';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
 
`;
const Option = styled.option``;


const MoviesList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("hola")

    const handleFilters = (e) =>{
        const value = e.target.value 

        setFilters({
            ...filters,
            [e.target.name]: value

        })
    }

  return (
    <Container>
    <Navbar />
    <Title>{cat}</Title>
    <Movies cat={cat} filters={filters} sort={sort} />
    <Footer />
  </Container>


  )
};

export default MoviesList;
