import React from "react";
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Nav = () => {

    const logout = () => {
        localStorage.clear()
    }
    let user = localStorage.getItem('username')

    const NavBarLinks = styled.div`
         max-width: 100%;
         display: flex;
         justify-content: space-evenly
         
     `;


    return (
        <div>
            <h1>WaterCan</h1>
            <NavBarLinks>

                <Link to="/">Login</Link>
                <NavLink to="/protected">User Profile</NavLink>
                <Link to="/" onClick={logout}>Logout</Link>
                {/* <NavLink to="plants">Plants</NavLink> */}
                
            </NavBarLinks>
        </div>
    )
}

export default Nav;