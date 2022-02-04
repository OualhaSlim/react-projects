import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID GcSd42V40KGqLFtPm0c8xXHhfBRheCy-Tx4U1EjmzKQ'
    }
});