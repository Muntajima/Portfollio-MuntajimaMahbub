import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='inter-normal w-11/12 mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;