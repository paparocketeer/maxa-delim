import React from 'react';
import loveImg from '../../love.png';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <span className="maxa">for Maxa with love
                <img src={loveImg} alt="love" />
            </span>
            <div className="header w-100 text-center p-4">
                COMA SEPARATING TOOL            
            </div>
            
        </div>
        
    );
};

export default Header;
