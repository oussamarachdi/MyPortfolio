import React from 'react'
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
                <a className="btn-outline" href="/">Contact me</a>
            </div>
            
        </header>
    )
}

export default Header
