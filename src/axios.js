import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-mern-clonee.herokuapp.com/",
});

export default instance;