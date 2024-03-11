import axios from 'axios';
import { resolve } from '../resolve.js';


export async function getUserById(id) {
    const token = localStorage.getItem('token');
    return resolve(
        axios.get(`http://localhost:8080/api/User/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}

export async function deleteUser(){
    const token = localStorage.getItem('token');
    return resolve(
        axios.delete('http://localhost:8080/api/User/delete', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => {
            console.log(res.data); // Log the response data
            return res.data; // Return the response data
        })
    );
}

export async function updateUser(user) {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(`http://localhost:8080/api/User/update`, user, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

export async function getLoan(userId,LoanId,loaninfo){
    try{
    const token = localStorage.getItem('token');
    return resolve(
        axios.post(`http://localhost:8080/api/LoanList/post/${userId}/${LoanId}`,loaninfo, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}