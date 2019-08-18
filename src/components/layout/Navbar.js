//class based components

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navbar = ({icon, title}) => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/>
                {title}
            </h1>
            <ul>
                <NavLink to='/' className='link'>Home</NavLink>
                <NavLink to='/about' className='link'>About</NavLink>
            </ul>
        </nav>
    )
    
}

Navbar.defaultProps ={
    title: 'Github Finder',
    icon: 'fab fa-github',
}

//prop-types
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar