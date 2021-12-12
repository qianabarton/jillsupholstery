import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from 'react-router-hash-link';

import qlogo from '../img/q-logo.svg';

export default class MyNav extends Component {
    render() {
        return (
            <Navbar sticky="top" className="nav px-md-5" bg="" expand="sm">
                <Navbar.Brand href="/">
                    <img
                        src={qlogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""/>
                </Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav className="text-center">

                    <div className="d-md-block">
                    <Nav.Link
                            className="pl-md-3 nav-link"
                            href="mailto:barton.qiana@gmail.com"
                            target="_blank">
                            barton.qiana@gmail.com
                        </Nav.Link>
                    </div>

                    </Nav>
            </Navbar>
        );
    }
}
