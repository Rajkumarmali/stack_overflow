import React from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from './pages/home/auth/Auth';
import Home from './pages/home/Home';
import Questions from './pages/question/Questions';
import AskQuestion from './pages/askQuestion/AskQuestion'
import DisplayQuestion from './pages/question/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/User/Users';
import UserProfile from './pages/UserProfile/UserProfile';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/Questions/:id' element={<DisplayQuestion />} />
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
        </Routes>
    );
}

export default AllRoutes;
