import React from "react";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Nav = () => {

    const logout = () => {
        localStorage.clear()
    }
    let user = localStorage.getItem('username')

    const NavBarLinks = styled.nav`
         width: 100%;
         display: flex;
         justify-content: space-evenly;
         align-items: center;
         text-decoration: none;
         font-weight: bold;
         text-color: black;
         
     `;


    return (
        <header>
            <h1>WaterCan</h1>
            <NavBarLinks>

                <Link to="/">Login</Link>
                <NavLink to="/protected">User Profile</NavLink>
                <Link to="/" onClick={logout}>Logout</Link>
                {/* <NavLink to="plants">Plants</NavLink> */}
                
            </NavBarLinks>
        </header>
    )
}

export default Nav;