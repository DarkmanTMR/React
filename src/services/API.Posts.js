import axios from "axios";

const axiosPosts = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});


const getPosts = () =>  axiosPosts('/Posts')

export {getPosts}