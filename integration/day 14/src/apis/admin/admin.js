import axios from 'axios';
import { resolve } from '../resolve.js';

export async function getAllUsers()
{
    const token=localStorage.getItem('token');
    return resolve(axios.get('http://localhost:8080/api/User/users',{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function approveLoan(loanListId) {
    const token = localStorage.getItem('token');
    const url = `http://localhost:8080/api/LoanList/approve/${loanListId}`;

    try {
        const response = await resolve(
            axios.put(url, null, {
                headers: { "Authorization": `Bearer ${token}` }
            })
        );
        return response.data; // Return the updated loan object
    } catch (error) {
        console.error("Error approving loan:", error);
        throw error;
    }
}
export async function rejectLoan(loanListId) {
    const token = localStorage.getItem('token');
    const url = `http://localhost:8080/api/LoanList/reject/${loanListId}`;

    try {
        const response = await resolve(
            axios.put(url, null, {
                headers: { "Authorization": `Bearer ${token}` }
            })
        );
        return response.data; // Return the updated loan object
    } catch (error) {
        console.error("Error rejecting loan:", error);
        throw error;
    }
}