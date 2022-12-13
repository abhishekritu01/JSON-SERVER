import axios from 'axios'

const API_URL = 'http://localhost:3002/users';

//add user 
export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data)
    } catch (error) {
        console.log('Error while calling Api', error.message );
    }
}

//get all users
export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log('Error while calling Api', error.message );
    }
}

//get all single user details in from
export const getUser = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log('Error while calling Api', error.message );
    }
}

// const edit user
export const editUser = async(data,id) =>{
    try {
        return await axios.put(`${API_URL}/${id}`,data);
    } catch (error) {
        console.log('Error while calling Api', error.message );
    }
}

//delete user
export const deleteUser = async (id) =>{
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log('Error while calling Api', error.message );
    }
}