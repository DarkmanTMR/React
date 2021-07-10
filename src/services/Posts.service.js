import axios from "axios";


const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const getPosts = () => axiosInstance ('posts');


export {getPosts}