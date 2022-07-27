import React from 'react';
import Badge from 'react-bootstrap/esm/Badge';
import NavBar from 'react-bootstrap/Navbar';

const navBar =(props) =>{ 
        return (
        <NavBar bg="light">
                <NavBar.Brand href="#">
                NavBar <span><Badge pill bg="secondary">{props.totalCounters}</Badge></span>
                </NavBar.Brand>
        </NavBar>    
        );
    }

export default navBar;