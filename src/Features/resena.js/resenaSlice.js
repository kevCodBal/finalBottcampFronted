import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { post }from '../../conectionApi'

const initialState ={
    resena:{},
    posteado:false,
    loading:false
}

export const crearResena= createAsyncThunk("/pelicula/resena", async (data)=>{
    const createresena = await post('/resena', data)

    return createresena.data
})

const resenaSlide = createSlice({
    name:"resena",
    initialState,

    extraReducers(builder){
        builder.addCase(crearResena.pending, (state) =>{
            state.loading= true
        }).addCase(crearResena.fulfilled, (state, action)=>{
            state.resena = action.payload 
            state.loading = false
            state.posteado = true
        })
    }
})

export default resenaSlide.reducer