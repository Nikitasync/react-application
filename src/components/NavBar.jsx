import React from 'react';

const NavBar = () => {
    return (
        <nav className='app_navbar'>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;