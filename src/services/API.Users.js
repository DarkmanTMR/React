import axios from 'axios'


const axiosUsers = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
    });


const getUsers = () =>  axiosUsers('/users')

export {getUsers}