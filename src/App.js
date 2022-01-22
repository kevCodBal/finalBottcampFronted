import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  BrowserRouter,  Route, Routes } from "react-router-dom";
import { recuperarSesion } from "./Features/user/userSlice";
import AddMovie from "./pages/AddMovie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import MoviesList from "./pages/MoviesList";
import Register from "./pages/Register";



function App() {
  const dispatch = useDispatch()
  const {logged, user} = useSelector(state => state.user)

  const usermio = user
  console.log(usermio)
  console.log("Estoy probando si si funciona el elengh")
  console.log(usermio.length) 

  if(logged  && !user.empty){
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(user)
    )
    console.log(`Ya estoy en la sesion con el ${user}`)
    console.log(user)
  }else{
    console.log("No Hay Sesion")
  }
  


  useEffect(()=>{
    const loggedUser = window.localStorage.getItem('loggedUser')

      if(loggedUser){
      const user = JSON.parse(loggedUser)

      console.log(user.nombre)
      console.log(user.rol)
        dispatch(recuperarSesion(
        {
          nombre: user.nombre ,
          rol: user.rol
        }
        ) )

        console.log(user)
      }else{
        console.log("No hay por que recuperar sesion")
      }

  },[])

  return (


      
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/movies/:category' element={<MoviesList/> } />
        <Route  path='/mov/:id' element={<Movie/>}/>
        <Route  path='/login'  element={<Login user={false}/> }/>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/addmovie' element={<AddMovie/>}/>
      </Routes>
    </BrowserRouter>
    
     
  );
}

export default App;
