import axios from 'axios'


const Instanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const GetUsersAPI = () => {
    return Instanse.get('/users')
}

export const GetUserAPI = (id) => {
    return Instanse.get(`/users/${id}`)
}