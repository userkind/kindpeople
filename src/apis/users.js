import axios from 'axios'

export const getUsers = () => {
    return axios.get('https://62fc9367b9e38585cd4173a5.mockapi.io/users')
}
// De create data thi post
export const createUsers = (formData) => {
    return axios.post('https://62fc9367b9e38585cd4173a5.mockapi.io/users',formData)
}
// De edit data thi put
export const editUsers = (id, formData) => {
    return axios.put(`https://62fc9367b9e38585cd4173a5.mockapi.io/users/${id}`,formData)
}
export const deleteUsers = (id) => {
    return axios.delete (`https://62fc9367b9e38585cd4173a5.mockapi.io/users/${id}`)
}