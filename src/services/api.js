import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-g1tj.onrender.com"
});