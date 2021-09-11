import React from 'react'
import { useState } from 'react/cjs/react.development'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import { MenuItems } from './MenuItems'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                            <a className="navbar-brand" href="/">My Portfolio</a>
                            <div className="MenuIcon" onClick={() => handleClick()}>
                                <FontAwesomeIcon className="icon" icon={isOpen ? faTimes : faBars}/>
                            </div>
                            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                                {
                                    MenuItems.map((item, index)=>{
                                        return (
                                            <li className="nav-item" key={index}>
                                                    <a className={item.className} href={item.url}>
                                                        {item.title}
                                                    </a>
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
