import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { iniciarSesion, recuperarSesion } from '../Features/user/userSlice';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



const Login = () => {

    const dispatch = useDispatch()
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("")
    
    const handleClick = (e) =>{
        e.preventDefault();
        
        dispatch( iniciarSesion({
            correo: username,
            contrasena: password
        }))
        
    }

    const {logged, user} = useSelector(state => state.user)
    
  return (
      <>
    <Navbar/>
    { logged? <Container>
                <Title>Bienvenido {user.nombre}</Title>
              </Container>
     :
    <Container>
        
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input
          placeholder="Correo Electronico"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick} disabled={logged} >
          LOGIN

        </Button>
        
        <Link>HAS OLVIDADO TU CONTRASENA</Link>
        <Link>CREA UNA CUENTA</Link>
      </Form>
    </Wrapper>
    
    
  </Container>
  }
  </>
  ) 
};

export default Login;
