import axios from 'axios';
import { resolve } from '../resolve.js';

const token = localStorage.getItem('token');
export async function getLoans() {
    try {
        const response = await axios.get('http://localhost:8080/api/Loans/loans', {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching loans:", error);
        throw error;
    }
}

export async function getLoanById(id) {
    try {
        const response = await axios.get(`http://localhost:8080/api/Loans/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching loan:", error);
        throw error;
    }
}


export async function addLoan(loan){
    return resolve(
        axios.post(`http://localhost:8080/api/Loans/post`, loan, {
            headers: { "Authorization": `Bearer ${token}` }
        })
    )
    
}

export async function deleteLoans(loanId){
    try {
        const response = await axios.delete(`http://localhost:8080/api/Loans/delete/${loanId}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting loan:", error);
        throw error;
    }
}

export async function getPendingLoans() {
    try {
        const response = await axios.get('http://localhost:8080/api/LoanList/pending', {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching pending loans:", error);
        throw error;
    }
    
}

export async function updateLoan(loan) {
    try {
        const response = await axios.put(`http://localhost:8080/api/Loans/update`, loan, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error("Error updating loan:", error);
        throw error;
    }
}

export async function getLoansUsers(userId) {
    try{
    return resolve(
        axios.get(`http://localhost:8080/api/Loans/loansUsers/${userId}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }

}

export async function getLoansByUserId(userId) {
    try {
        const response = await axios.get(`http://localhost:8080/api/LoanList/${userId}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user loans:", error);
        throw error;
    }
}