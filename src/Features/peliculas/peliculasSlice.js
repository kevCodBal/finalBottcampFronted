import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { post }from '../../conectionApi'

const initialState ={
    pelicula:{},
    posteado:false,
    loading:false
}

export const crearPelicula= createAsyncThunk("/pelicula/new", async (data)=>{
    const createPelicula = await post('/peliculas', data)

    return createPelicula.data
})

export const peliculanueva= createAsyncThunk("/nuevaPelicula/", ()=>{
    const nuevaPelicula = true;
    
    return nuevaPelicula
})

const peliculaSlide = createSlice({
    name:"pelicula",
    initialState,

    extraReducers(builder){
        builder.addCase(crearPelicula.pending, (state) =>{
            state.loading= true
        }).addCase(crearPelicula.fulfilled, (state, action)=>{
            state.pelicula = action.payload 
            state.loading = false
            state.posteado = true
        }).addCase(peliculanueva.pending, (state)=>{
            state.loading = false
            state.posteado = false
        }).addCase(peliculanueva.fulfilled, (state)=>{
            state.loading = false
            state.posteado = false
        })
    }
})

export default peliculaSlide.reducer