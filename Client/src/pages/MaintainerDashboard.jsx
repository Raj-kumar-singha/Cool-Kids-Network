import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import UserList from '../components/UserList';
import MaintainerList from '../components/MaintainerList';

const MaintainerDashboard = () => {
    const [user, setUser] = useState(null);
    const [showUserList, setShowUserList] = useState(false);


    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className="p-16 bg-gray-100 min-h-screen appbody">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Your Dashboard</h1>

                {/* Loading or User Info */}
                {!user ? (
                    <p className="text-xl text-center text-gray-600">Loading user data...</p>
                ) : (
                    <div>
                        {/* User Info Card */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hello, {user?.User?.firstName} {user?.User?.lastName}!</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-lg text-gray-600"><strong>First Name:</strong> {user?.User?.firstName}</p>
                                    <p className="text-lg text-gray-600"><strong>Last Name:</strong> {user?.User?.lastName}</p>
                                    <p className="text-lg text-gray-600"><strong>Email:</strong> {user?.User?.email}</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-600"><strong>Country:</strong> {user?.User?.country}</p>
                                    <p className="text-lg text-gray-600"><strong>Role:</strong> {user?.User?.role}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center items-center gap-4 mt-6">
                                <button
                                    onClick={() => setShowUserList(!showUserList)}
                                    className="btn btn-primary px-6 py-3 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                                >
                                    {showUserList ? "Hide Users" : "View All Users"}
                                </button>
                            </div>
                            {showUserList && <MaintainerList />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaintainerDashboard;

