import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        toast.success('Logged out successfully!');
        navigate('/login');
    };

    return (
        <div className="navbar bg-base-100 Header">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </div>
                <Link to={"/"} className="btn btn-ghost text-2xl">Cool Kids Network</Link>
            </div>
            <div className="navbar-end">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="btn">Logout</button>
                ) : (
                    <Link to="/signup" className="btn">Sign Up</Link>
                )}
            </div>
        </div>
    );
};

export default Header;
