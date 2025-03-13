import React from 'react';
import '../styles/Header.css'
import { getIconPath } from '../utils/icons';
import { useTheme } from '../hooks/useTheme';


const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className='logo'>
                <img src={getIconPath('vector')} />
                <h1>Task Manager</h1>
            </div>
            <img src={getIconPath(theme)} onClick={toggleTheme} />
        </header>
    );
};

export default Header;