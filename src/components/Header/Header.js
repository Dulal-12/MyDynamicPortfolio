import React from 'react';
import Navbar from './Navbar/Navbar';
import MainContent from './MainContent/MainContent';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <MainContent></MainContent>
        </div>
    );
};

export default Header;