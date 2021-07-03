import axios from "axios";

const axiosComments = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

const getComments = () => axiosComments('/Comments');

export {getComments};