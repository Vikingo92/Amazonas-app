import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contenido from '../components/Contenido';
import Home from '../components/Home';

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/contenido' element={<Contenido />} />
                    <Route path='*'  element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </>
    )
}

export default Dashboard