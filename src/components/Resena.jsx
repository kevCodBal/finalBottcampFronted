import React from 'react';
import styled from 'styled-components';
import {StarOutline } from '@material-ui/icons'
//import StarIcon from '@mui/icons-material/Star';

const Container = styled.div`
   padding: 20px;
    margin: 10px;
    display: flex;
    box-shadow: 16px 11px 29px -6px rgba(0,0,0,0.69);
    justify-content: space-around;
    align-items: center;
`;

const Resena = ({item}) => {

    const puntaje = item.calificacion
    console.log(puntaje)
    let start = new Array(puntaje)
    start.fill(2,0)

  return (
    <Container>
        <h3>{item.userCreacion}</h3>
        <p>{item.descripcion}</p>
       
        {
            start.map((item)=> <StarOutline/>)
             
        }
    </Container>
  )
};

export default Resena;
