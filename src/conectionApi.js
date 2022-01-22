import axios from "axios";


const BASE_URL = "http://localhost:4000/mov";

export const urlApi = axios.create({
    baseURL: BASE_URL,
})

const post = async (url, data)=>{
    return await urlApi.post(url, data, {
        withCredentials: true
    })
}


export { post}