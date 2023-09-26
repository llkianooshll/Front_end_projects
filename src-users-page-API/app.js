import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import Home from './components/home';
import { Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './components/login';
import Register from './components/register';
import User from './components/user';
import Dashboard from './components/dashboard';

const App = () => {
    return (
        <>
            <Navbar />
            <div className='containr-fluid'>
                <Routes>
                    <Route path='users/:id' Component={User} />
                    <Route path='/' Component={Home} />
                    <Route path='login' Component={LogIn} />
                    <Route path='dashboard' Component={Dashboard} />
                    <Route path='users' Component={Users} />
                    <Route path='register' Component={Register} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;