import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { crearResena } from '../Features/resena.js/resenaSlice';

const Container= styled.div` 
    width: 100vw;
    height: 50vh;
    background: rgb(112,41,72);
    background: radial-gradient(circle, rgba(112,41,72,1) 0%, rgba(63,99,142,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    
`
const Wrapper = styled.div`
  width: 40%;
  height: 75%;
  padding: 20px;
  background-color: white;
`; 

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 3px;
`;

const PuntajeMovie = styled.select` 
    margin-left: 10px;
    padding: 5px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 45%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 25px auto;
`;

const OpcionCalificacion = styled.option` 

`
const Opcion = styled.div` 
    display: flex;
    align-items: center;
   
`


const NewResena = ({id}) => {

  const dispatch = useDispatch()
  const [puntuacion, setPuntacion] = useState("")
  const [resena, setResena] = useState(" ")

  const calificacion=['1','2','3','4','5']

  let date = new Date()
  const fecha = date.toISOString().split('T')[0]
  
  console.log(id)

 const handleClick = (e) =>{
    e.preventDefault();

    dispatch(crearResena ({
      descripcion: resena,
      fechaCreacion: fecha,
      calificacion: puntuacion,
      idPelicula: id
    }))
 }

  return (
    <Container>
    <Wrapper>
      <Title>CREAR RESENA</Title>
      <Form> 
        <Input placeholder="Descripcion"
            onChange={(e) => setResena(e.target.value)}
        />
        <Opcion>    
            <h5>Calificacion</h5>
            <PuntajeMovie onChange={(e) =>setPuntacion(e.target.value) }>
                {
                  calificacion.map((p)=> (
                   <OpcionCalificacion>{p}</OpcionCalificacion>
                  ))
                }
            </PuntajeMovie>
        </Opcion>
        

        <Button onClick={handleClick} >CREATE</Button>
      </Form>
    </Wrapper>
  </Container>
  )
};

export default NewResena;
