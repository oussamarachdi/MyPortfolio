import React from 'react'
import { useState } from 'react/cjs/react.development'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes, faCode} from "@fortawesome/free-solid-svg-icons"
import { MenuItems } from './MenuItems'
import  {  Link } from "react-router-dom"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const CloseMobileMenu = () => {
        setIsOpen(false);
    }
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                         <Link className="navbar-brand" to="/" onClick={CloseMobileMenu}> <FontAwesomeIcon icon={faCode}/>  Oussama's Portfolio</Link>
                            <div className="MenuIcon" onClick={() => handleClick()}>
                                <FontAwesomeIcon className="icon" icon={isOpen ? faTimes : faBars}/>
                            </div>
                            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                                {
                                    MenuItems.map((item, index)=>{
                                        return (
                                            <li className="nav-item" key={index}>
                                                        <Link to={item.url} className="nav-link" onClick={CloseMobileMenu}>{item.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            
            </div>
    </nav>

            

    )
}

export default NavBar
