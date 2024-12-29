import './App.css';
import React from 'react';
import SignIn from "./component/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./component/SignUp";
import Dashboard from './component/Dashboard';
import ErrorPage from './component/ErrorPage';

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Navigate to="/signup"/>} />
        <Route index path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/error" element={<ErrorPage/>} />
    </Routes>
    </>
  );
}

export default App;
