import axios, {interceptors} from "axios";
import {urls} from "../configs/urls";

// const accessTokenKey = urls.base.access_token;

const axiosService = axios.create({baseURL:urls.base.baseURL})

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${urls.base.access_token}`;
    return config
})

export {
    axiosService
}