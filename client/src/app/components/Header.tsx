import React from 'react';
import '../styles/Header.css'
import ToggleModeButton from './ToggleModeButton';
import { Icons } from '../constants/icon';


const Header: React.FC = () => {

    return (
        <header className="header">
            <div className='logo'>
                <Icons.logo />
                <h1>Task Manager</h1>
            </div>
            <ToggleModeButton />
        </header>
    );
};

export default Header;