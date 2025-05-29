import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/login', formData);

// Add interceptors for better error handling
API.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(
            error.response?.data?.error ||
            error.response?.data?.message ||
            error.message ||
            'Something went wrong'
        );
    }
);