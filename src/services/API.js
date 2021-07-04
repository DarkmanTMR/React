import axios from "axios";

let axiosUsers = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});

const getUsers = () => axiosUsers('users');


export {getUsers}
