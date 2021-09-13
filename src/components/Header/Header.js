import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Header = () => {
    return (
        <header className="header-wrapper"> 
            <div className="main-info">
                <h3>Welcome to My Profile</h3>
                <p>My Name is Oussama and Im a : Web Developper</p>
                <Typed
                className="typed-header"
                    strings={['django', 'reactjs', 'bootstrap', 'MySql']}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                />
                <Link to="/contact-me" className="btn-outline">Contact me</Link>
            </div>
            
        </header>
    )
}

export default Header
