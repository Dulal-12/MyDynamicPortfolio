import React from 'react';
import Navbar from './Navbar/Navbar';
import MainContent from './MainContent/MainContent';
import './Header.css';
import Project from '../Project/Project';
const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainContent></MainContent>
           
        </div>
    );
};

export default Header;