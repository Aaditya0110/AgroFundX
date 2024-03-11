import axios from 'axios';

import { resolve } from './resolve.js';

export  async function login(username, password) {
    return resolve(axios.post('http://localhost:8080/auth/authenticate', { username, password }).then(res => res.data));
}

export async function signup(name,password,email) {
    return resolve(axios.post('http://localhost:8080/auth/new',{name,password,roles:'USER',email}).then(res=>res.data));
}

export async function getUserIdByUsername(username) {
    
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`http://localhost:8080/api/UserInfo/id-with-username/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching loans:", error);
        throw error;
    }
}
export async function getUsersIdByUsername(username) {
    
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`http://localhost:8080/api/User/id-with-username/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching loans:", error);
        throw error;
    }
}
export async function getRoleWithUsername(id) {
    
    const token = localStorage.getItem('token');
    try {
        const response2 = await axios.get(`http://localhost:8080/api/UserInfo/role-with-userName/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response2.data; 
    } catch (error) {
        console.error("Error fetching loans:", error);
        throw error;
    }
}


// export async function getUser(id) {
// return resolve(axios.get(`http://some-api.com/users/${id}`).then(res => res.data));
// }
  