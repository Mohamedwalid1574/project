import axios from 'axios';

const DBconnection=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})
export default DBconnection; 
