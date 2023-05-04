import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {

    const { role } = useSelector(state => state.persistedReducer.auth.userInfo);

    if (role === "user" || role === "admin") {
        return <Outlet />;
    }
    return <Navigate to={"/login"} replace />;


}

export default ProtectedRoutes