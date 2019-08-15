//class based components
import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Navbar = ({icon, title}) => {

    return (
        <nav className='navbar bg-secondary text-light'>
            <h1>
                <i className={icon}/>
                {title}
            </h1>
            <li><NavLink to='/' style={{textDecoration:'none', color:'white'}}>Home</NavLink></li>
            <li><NavLink to='/about' style={{textDecoration:'none', color:'white'}}>About</NavLink></li>
            
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