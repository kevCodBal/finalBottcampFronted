import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { crearPelicula, peliculanueva } from '../Features/peliculas/peliculasSlice';
import { Link } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerRealese = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;







const AddMovie = () => {

  const dispatch = useDispatch()
    const [titulo, setTitulo] = useState("")
    const [director, setDirector]= useState("")
    const [descripcion, setDescripcion]= useState("")
    const [estreno, SetEstreno]= useState(0)
    const [nominaciones, setNominaciones]= useState("")
    const [genero, setGenero]= useState("")
    const [elenco, setElenco]= useState("")
    const [img, setImg]= useState("")
    
    
    const handleClick = (e) =>{
        e.preventDefault();

        dispatch(  crearPelicula ({
            titulo: titulo,
            director: director,
            descripcion: descripcion,
            estreno: estreno,
            nominaciones: nominaciones,
            genero: genero,
            elenco: elenco,
            img: img
        }))
    }

    const newMovie = (e) =>{
      e.preventDefault();

      dispatch( peliculanueva())
    }
    const { posteado} = useSelector(state => state.pelicula)

  return (
    <>
    <Navbar/>
    { posteado? <ContainerRealese>
      <Title>Pelicula creada exitosamente</Title> 
      
      <Button onClick={newMovie}  >
          Nueva Pelicula

        </Button>
    </ContainerRealese>  
          
    : <Container>
        
    <Wrapper>
      <Title>Nueva Pelicula</Title>
      <Form>
        <Input
          placeholder="titulo"
          type="text"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Input
          placeholder="director"
          type="text"
          onChange={(e) => setDirector(e.target.value)}
        />
        <Input
          placeholder="Descripcion"
          type="text"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Input
          placeholder="Estreno"
          type="number"
          onChange={(e) => SetEstreno(e.target.value)}
        />
        <Input
          placeholder="Nominaciones"
          type="text"
          onChange={(e) => setNominaciones(e.target.value)}
        />
        <Input
          placeholder="Genero"
          type="text"
          onChange={(e) => setGenero(e.target.value)}
        />
        <Input
          placeholder="Elenco"
          type="text"
          onChange={(e) => setElenco(e.target.value)}
        />
        <Input
          placeholder="Imagen"
          type="text"
          onChange={(e) => setImg(e.target.value)}
        />
        <Button onClick={handleClick}  >
          Add

        </Button>
        
        
        
      </Form>
    </Wrapper>
    
    
  </Container>
  }
  </>
  );
};

export default AddMovie;
