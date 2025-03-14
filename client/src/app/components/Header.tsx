import React from 'react';
import '../styles/Header.css'
import { getIconPath } from '../utils/icons';
import ToggleModeButton from './ToggleModeButton';


const Header: React.FC = () => {

    return (
        <header className="header">
            <div className='logo'>
                <img src={getIconPath('vector')} />
                <h1>Task Manager</h1>
            </div>
            <ToggleModeButton />
        </header>
    );
};

export default Header;