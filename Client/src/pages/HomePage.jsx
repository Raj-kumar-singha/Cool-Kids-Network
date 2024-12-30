import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="appbody flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black">
            <div className="text-center p-6">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                    Welcome to the <span className="text-yellow-300">Cool Kids Network</span>
                </h1>
                <p className="text-xl font-medium opacity-90">
                    A place where creativity, fun, and community come together.
                </p>
            </div>
            {!isLoggedIn ? (
                <div className="flex flex-row items-center mt-6 gap-x-4">
                    <Link to="/signup" className="btn bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold shadow-md">
                        Sign Up
                    </Link>
                    <Link to="/login" className="btn bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold shadow-md">
                        Log In
                    </Link>
                </div>
            ) : (user?.User?.role === 'admin' ? (<div className="flex flex-row items-center mt-6 gap-x-4">
                <Link to="/maintainer-dashboard" className="btn bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold shadow-md">
                    Maintainer Dashboard
                </Link>
            </div>) : (<div className="flex flex-row items-center mt-6 gap-x-4">
                <Link to="/dashboard" className="btn bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold shadow-md">
                    Dashboard
                </Link>
            </div>))}
        </div>
    );
};

export default HomePage;
