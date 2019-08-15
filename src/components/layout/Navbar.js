//class based components

import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({icon, title}) => {

    return (
        <nav className='navbar bg-secondary text-white'>
            <h1>
                <i className={icon}/>
                {title}
            </h1>
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