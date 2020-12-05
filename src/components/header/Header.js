//const { ReactComponent } = require("*.svg");

import React, { Component } from 'react';
import {Navbar, Nav, NavbarBrand, NavbarText, NavItem,Button, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';
import  Logo  from '../../shared/logo.png';

class Header extends Component {
   
    render() {
        return (  
            <div>
                <Navbar  dark expand="md" className="head">
                    <div className="container">                
                        <NavbarBrand className="mt-2" href="/" width="37" hight="41">
                            <img src={Logo}  alt="WA"  width="35" height="35"/>
                        </NavbarBrand>
                        <Nav navbar className="mt-2 align-item-center mr-auto">
                            <NavItem>
                                <NavLink className="nav-link " to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/feedback">
                                    <span className="fa fa-pencil fa-md"></span> Feedback
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron className="jumbo">
                    <div className="container">
                        <div className="col-12 col-sm-6">
                            <h1>5 Day Weather Forecast</h1>
                            <p>We are using open weather map API for fetching data.</p>
                        </div>
                    </div>
                </Jumbotron>
            </div>          
        );
    }
}

export default Header;

/**{data.length ? data : null}
{err.length ? err: null}
*/