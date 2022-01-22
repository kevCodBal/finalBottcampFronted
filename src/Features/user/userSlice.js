import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { post }from '../../conectionApi'

const initialState ={
    user:{},
    logged:false,
    loading: false
}

export const iniciarSesion= createAsyncThunk("user/login", async (data)=>{
    const login = await post('/auth/login', data)

    return login.data
})

export const recuperarSesion = createAsyncThunk("/recuperar/sesion", (data)=>{
    const sesionRecuperada = data 
    console.log(data)
    return sesionRecuperada
})

const userSlice = createSlice({
    name:"user",
    initialState,


    extraReducers(builder){
        builder.addCase(iniciarSesion.pending, (state)=>{
            state.loading= true
        }).addCase(iniciarSesion.fulfilled, (state, action)=>{
            state.user = action.payload 
            state.loading = false
            state.logged = true
        }).addCase(recuperarSesion.pending, (state)=>{
            state.loading= true
        }).addCase(recuperarSesion.fulfilled, (state, action)=>{
            state.user = action.payload
            state.loading = false
            state.logged = true
        })
    }
})

export default userSlice.reducer