import axios from "axios";
import {urls} from "../config/urls";

const axiosService = axios.create({baseURL:urls.base.baseURL})

export {
    axiosService
}