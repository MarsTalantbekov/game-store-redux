import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CardBlock from '../CardBlock/CardBlock';


const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <Link to="/" className='header__store-title'>
                    Game Store
                </Link>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <CardBlock/>
            </div>
        </div>
    );
};

export default Header;