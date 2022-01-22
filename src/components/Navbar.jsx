import { Search, ShoppingCartOutlined, Add } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';


const Container = styled.div`
    height: 60px;
    background-color: aliceblue;
    padding-bottom: 15px;
    
`
const Wraper = styled.div` 
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
`

const Languaje = styled.span` 
    font-size:14px;
    cursor: pointer;
`

const SearchContainer = styled.div` 
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input` 
    border: none;
`

const Center = styled.div` 
    flex: 1;
    text-align: center;
`

const Logo = styled.h1` 
    font-weight: bold;
`

const Right = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div` 
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration:none ;

`

    



const Navbar = () => {
    const {logged, user} = useSelector(state => state.user)

    const rol = user.rol
   
  return (
    <Container> 
        <Wraper>
            <Left>
                <Languaje>ES</Languaje>
                
            </Left>
            <Center>
                <Logo><Link style={{textDecoration: 'none'}} to={"/"}> MOVIES AND MORE </Link></Logo>
            </Center>
            <Right>
              { logged ? <p>{user.nombre}</p>:  <MenuItem ><Link style={{textDecoration: 'none'}} to={"/register"}>REGISTER </Link></MenuItem> }
              { logged ? <p></p> : <MenuItem ><Link style={{textDecoration: 'none'}}  to={"/login"}>SING IN</Link></MenuItem>}
              
              {rol == "admin"  ?  <MenuItem>Anadir Pelicula </MenuItem> : <p></p> }
              { rol == "admin" ? <Link to={"/addmovie"}>
                <MenuItem>
                    <Badge  color='primary'>
                        <Add/>
                    </Badge>
                </MenuItem>
                </Link> : <p></p>}  
            </Right>
        </Wraper>
    </Container>
  )
};

export default Navbar;
