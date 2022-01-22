import {configureStore} from "@reduxjs/toolkit"
import peliculasSlice from "../Features/peliculas/peliculasSlice"
import resenaSlice from "../Features/resena.js/resenaSlice"
import userSlice from "../Features/user/userSlice"

const store = configureStore({
    reducer:{
        user: userSlice,
        resena: resenaSlice,
        pelicula: peliculasSlice
    }
})

export default store