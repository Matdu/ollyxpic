import axios from 'axios'

window.axios = axios

const baseURL = window.location.href.split('/')[2].includes('ollyxpic') ? 'http://api.ollyxpic.com' : 'http://localhost:8888'

window.axios = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    responseType: 'json'
})