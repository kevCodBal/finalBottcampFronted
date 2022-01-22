import React from 'react';
import {Add, Remove} from '@material-ui/icons'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlApi} from '../conectionApi'
import axios from 'axios';
import Resena from '../components/Resena';
import NewResena from '../components/NewResena';
import { useDispatch , useSelector} from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const TitleA = styled.h1` 
    font-weight: 300;
    font-style: italic;
    color: bisque;
`

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 50;
  font-size: 20px;
  padding-left: 10px;
  margin: auto 5px;
`;

const ContainerHeaderMovie = styled.div`
    display: flex;
`
const ContainerNewResna = styled.div` 
    display: flex;
    align-items: center;

`


const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;


const Movie = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [movie, setMovie] = useState({})
    const [resena, setResena] = useState([])
    const { posteado} = useSelector(state => state.resena)
    
    useEffect(()=>{
        
      

        const getMovie = async () => {
            try{
                const res = await axios.get( `http://localhost:4000/mov/peliculas/${id}`)
                setMovie(res.data)
            }catch(error){console.log(error) }
        }
        const getResenaMovie = async () =>{
            try{
                const res = await urlApi.get(`/resena/${id}`)
                setResena(res.data)
                console.log(res.data)
            }catch(error){console.log(error)}
        }

        getMovie()
        getResenaMovie()
    } , [id, posteado ])

  return (
        <Container>
            <Navbar />
            <Wrapper>
            <ImgContainer>
                <Image src={movie.img } />
            </ImgContainer>
            <InfoContainer>
                <TitleA >INFORMACION</TitleA>
                <ContainerHeaderMovie >
                    <Title>{movie.titulo}</Title>
                    <Price> {movie.estreno}</Price>
                </ContainerHeaderMovie>
                <h2>Descripcion.</h2>
                <Desc>{movie.descripcion}</Desc>
                
                <TitleA>Resena</TitleA>
                {
                resena? resena.map(item =>  <Resena  item={item} />) 
                    : <div>No hay Resemas</div> 
                }
            </InfoContainer>
           
            </Wrapper>
           
                <NewResena id={id} />
            
           
            <Footer />
        </Container>
  )
};

export default Movie;
