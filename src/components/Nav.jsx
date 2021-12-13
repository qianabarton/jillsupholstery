import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from 'react-router-hash-link';

import logo from '../img/logo.png';

export default class MyNav extends Component {
    render() {
        return (
            <Navbar sticky="top" className="nav px-md-5" bg="" expand="sm">
                <Navbar.Brand className="navbar-brand" href="/">
                    <img className="logo" src={logo}/>
                    <span><span className="accent">Jill's</span> Upholstery</span>
                </Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav className="text-center">

                    <div className="d-md-block">
                    </div>

                    </Nav>
            </Navbar>
        );
    }
}
