import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstace';
import { toast } from "react-toastify";

const MaintainerLogin = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Handle form submission for maintainer login
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter a valid email');
            return;
        }

        try {
            const response = await axiosInstance.post('/maitain-users/login', { email });
            const data = response?.data;
            console.log("data", data);
            

            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(response.data));
            toast.success('Login Successfully');
            navigate('/maintainer-dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            return error;
        }
    };

    return (
        <div className="appbody flex items-center justify-center min-h-[85vh] bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Welcome Maintainer!
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Please log in with your email to maintain all the users role.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-2 hover:bg-primary-focus"
                    >
                       Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MaintainerLogin;
